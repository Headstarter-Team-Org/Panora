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

@Injectable()
export class WaveFinancialAccount implements IAccountService {
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
    return;
  }
}
