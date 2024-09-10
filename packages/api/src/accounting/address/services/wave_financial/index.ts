import { IAddressService } from '@accounting/address/types';
import { Injectable } from '@nestjs/common';
import { AccountingObject } from '@accounting/@lib/@types';
import { PrismaService } from '@@core/@core-services/prisma/prisma.service';
import { LoggerService } from '@@core/@core-services/logger/logger.service';
import { ApiResponse } from '@@core/utils/types';
import { ServiceRegistry } from '../registry.service';
import { WaveFinancialAddressInput, WaveFinancialAddressOutput } from './types';
import { SyncParam } from '@@core/utils/types/interface';
import { EncryptionService } from '@@core/@core-services/encryption/encryption.service';
import axios from 'axios';

@Injectable()
export class WaveFinancialService implements IAddressService {
  private API_URL: string = 'https://gql.waveapps.com/graphql/public'; // Wave Financial GraphQL API URL

  constructor(
    private prisma: PrismaService,
    private logger: LoggerService,
    private cryptoService: EncryptionService,
    private registry: ServiceRegistry,
  ) {
    this.logger.setContext(
      AccountingObject.address.toUpperCase() + ':' + WaveFinancialService.name,
    );
    this.registry.registerService('wave_financial', this);
  }

  async addAddress(
    addressData: WaveFinancialAddressInput,
    linkedUserId: string,
  ): Promise<ApiResponse<WaveFinancialAddressOutput>> {
    throw new Error('Method not implemented');
  }

  async sync(
    data: SyncParam,
  ): Promise<ApiResponse<WaveFinancialAddressOutput[]>> {
    try {
      const { linkedUserId } = data;
      const connection = await this.prisma.connections.findFirst({
        where: {
          id_linked_user: linkedUserId,
          provider_slug: 'wave_financial',
          vertical: 'accounting',
        },
      });

      if (!connection) {
        throw new Error('No Wave Financial connection found for this user');
      }

      const query = `
        query ($businessId: ID!) {
          business(id: $businessId) {
                  address{
                    addressLine1
                    addressLine2
                    city
                    province {
                      code
                      name
                    }
                    country {
                      code
                      name
                    }
                    postalCode
                  }
          }
        }
      `;

      const variables = {
        businessId: connection.business_id,
      };

      const response = await axios.post(
        this.API_URL,
        {
          query,
          variables,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.cryptoService.decrypt(
              connection.access_token,
            )}`,
          },
        },
      );

      if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
      }

      const address = response.data.data.business.address;

      //handling potential null values for fields
      const formattedAddress: WaveFinancialAddressOutput = {
        addressLine1: address.addressLine1 || '',
        addressLine2: address.addressLine2 || '',
        city: address.city || '',
        province: address.province
          ? {
              code: address.province.code || '',
              name: address.province.name || '',
            }
          : null,
        country: address.country
          ? {
              code: address.country.code || '',
              name: address.country.name || '',
              currency: address.country.currency
                ? {
                    code: address.country.currency.code || '',
                    name: address.country.currency.name || '',
                    symbol: address.country.currency.symbol || '',
                    plural: address.country.currency.plural || '',
                    exponent: address.country.currency.exponent
                      ? address.country.currency.exponent
                      : 0,
                  }
                : null,
              provinces: address.country.provinces
                ? address.country.provinces.map((province: any) => ({
                    code: province.code || '',
                    name: province.name || '',
                  }))
                : [],
            }
          : null,
        postalCode: address.postalCode || '',
      };

      this.logger.log(`Synced Wave Financial address!`);
      return {
        data: [formattedAddress],
        message: 'Wave Financial Address synced successfully',
        statusCode: 200,
      };
    } catch (error) {
      this.logger.log(`Failed to sync Wave Financial address`);
      throw error;
    }
  }
}
