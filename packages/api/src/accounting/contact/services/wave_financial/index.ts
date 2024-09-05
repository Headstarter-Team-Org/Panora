import { EncryptionService } from '@@core/@core-services/encryption/encryption.service';
import { LoggerService } from '@@core/@core-services/logger/logger.service';
import { PrismaService } from '@@core/@core-services/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { ServiceRegistry } from '../../../../@core/connections/accounting/services/registry.service';
import { ApiResponse } from '@@core/utils/types';
import { AccountingObject } from '../../../../../../shared/src/standardObjects';
import { AccountingObjectInput } from '@@core/utils/types/original/original.accounting';
import { WaveFinancialContactOutput } from './types';
import { IContactService } from '@accounting/contact/types';

@Injectable()
export class WaveFinancial implements IContactService {
  constructor(
        private prisma: PrismaService,
        private logger: LoggerService,
        private cryptoService: EncryptionService,
        private registry: ServiceRegistry,
    ) {
    this.logger.setContext(
        AccountingObject.contact.toUpperCase() + ':' + WaveFinancial.name,
    );
    this.registry.registerService('wave_financial', this);
  }
  async addContact(
    contactData: AccountingObjectInput,
    linkedUserId: string,
  ): Promise<ApiResponse<WaveFinancialContactOutput>> {
    return <ApiResponse<WaveFinancialContactOutput>>;
  }

  async syncContacts(
    linkedUserId: string,
  ): Promise<ApiResponse<WaveFinancialContactOutput[]>> {
    return <ApiResponse<WaveFinancialContactOutput[]>>;
  }

  async handleCallback(

  ): Promise<ApiResponse<WaveFinancialContactOutput>> {
    return <ApiResponse<WaveFinancialContactOutput>>;
  }

  async passthrough(

  ): Promise<ApiResponse<WaveFinancialContactOutput>> {
    return <ApiResponse<WaveFinancialContactOutput>>;
  }

  async constructPassthrough(

  ): Promise<ApiResponse<WaveFinancialContactOutput>> {
    return <ApiResponse<WaveFinancialContactOutput>>;
  }
}
