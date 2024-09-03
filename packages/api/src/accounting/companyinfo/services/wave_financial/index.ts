import { ICompanyInfoService } from '@accounting/companyinfo/types';
import { Injectable } from '@nestjs/common';
import { AccountingObject } from '@accounting/@lib/@types';
import { PrismaService } from '@@core/@core-services/prisma/prisma.service';
import { LoggerService } from '@@core/@core-services/logger/logger.service';
import { ApiResponse } from '@@core/utils/types';
import { ServiceRegistry } from '../registry.service';
import { WaveFinancialCompanyInput, WaveFinancialCompanyOutput } from './types';
import { SyncParam } from '@@core/utils/types/interface';
import { EncryptionService } from '@@core/@core-services/encryption/encryption.service';

@Injectable()
export class WaveFinancialService implements ICompanyInfoService {
  constructor(
    private prisma: PrismaService,
    private logger: LoggerService,
    private cryptoService: EncryptionService,
    private registry: ServiceRegistry,
  ) {
    this.logger.setContext(WaveFinancialService.name);
    this.registry.registerService('wave_financial', this);
  }

  async addCompanyInfo(
    companyData: WaveFinancialCompanyInput,
    linkedUserId: string,
  ): Promise<ApiResponse<WaveFinancialCompanyOutput>> {
    return {
      data: {},
      message: 'Wave Financial Company Info added successfully',
      statusCode: 201,
    };
  }

  async sync(
    data: SyncParam,
  ): Promise<ApiResponse<WaveFinancialCompanyOutput[]>> {
    return {
      data: [],
      message: 'Wave Financial Company Info synced successfully',
      statusCode: 200,
    };
  }
}
