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

@Injectable()
export class WaveFinancialService implements IAddressService {
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
    return {
      data: {},
      message: 'Wave Financial Address added successfully',
      statusCode: 201,
    };
  }

  async sync(
    data: SyncParam,
  ): Promise<ApiResponse<WaveFinancialAddressOutput[]>> {
    return {
      data: [],
      message: 'Wave Financial Address synced successfully',
      statusCode: 200,
    };
  }
}
