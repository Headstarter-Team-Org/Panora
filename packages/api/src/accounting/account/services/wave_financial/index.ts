import { Injectable } from '@nestjs/common';
import { EncryptionService } from '@@core/@core-services/encryption/encryption.service';
import { LoggerService } from '@@core/@core-services/logger/logger.service';
import { PrismaService } from '@@core/@core-services/prisma/prisma.service';
import { ServiceRegistry } from '../registry.service';
import { AccountingObject } from '@accounting/@lib/@types';
import { IAccountService } from '@accounting/account/types';
import { SyncParam } from '@@core/utils/types/interface';
import { ApiResponse } from '@@core/utils/types';
import {
  WaveFinancialAccountInput,
  WaveFinancialAccountOutput
} from "./types";
import axios from 'axios';

@Injectable()
export class WaveFinancialAccount implements IAccountService {
  private API_URL: string = 'https://gql.waveapps.com/graphql/public'; // Wave Financial GraphQL API URL
  constructor(
    private prisma: PrismaService,
    private logger: LoggerService,
    private cryptoService: EncryptionService,
    private registry: ServiceRegistry,
  ) {
    this.logger.setContext(
      AccountingObject.contact.toUpperCase() + ':' + WaveFinancialAccount.name,
    );
    this.registry.registerService('wave_financial', this);
  }
  async addAccount(
    accountData:WaveFinancialAccountInput, 
    linkedUserId:string
  ): Promise<ApiResponse<WaveFinancialAccountOutput>> {
    
    return;
  }

  async sync(data: SyncParam): Promise<ApiResponse<WaveFinancialAccountOutput[]>> {
    try {
      const {linkedUserId} = data;
      const connection = this.prisma.connections.findFirst({
        where: {
          id_linked_user: linkedUserId,
          provider_slug: 'wave_financial',
          vertical: 'accounting',
        },
      });
    } catch (e) {
      throw new Error(e)
    }
    return;
  }
}
