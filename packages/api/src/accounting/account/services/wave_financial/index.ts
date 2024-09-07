import { Injectable } from '@nestjs/common';
import { EncryptionService } from '@@core/@core-services/encryption/encryption.service';
import { LoggerService } from '@@core/@core-services/logger/logger.service';
import { PrismaService } from '@@core/@core-services/prisma/prisma.service';
import { ServiceRegistry } from '../registry.service';
import { AccountingObject } from '@accounting/@lib/@types';
import { IAccountService } from '@accounting/account/types';
import { SyncParam } from '@@core/utils/types/interface';

@Injectable()
export class WaveFinancialService implements IAccountService {
  constructor(
    private prisma: PrismaService,
    private logger: LoggerService,
    private cryptoService: EncryptionService,
    private registry: ServiceRegistry,
  ) {
    this.logger.setContext(
      AccountingObject.contact.toUpperCase() + ':' + WaveFinancialService.name,
    );
    this.registry.registerService('wave_financial', this);
  }
  async addContact(
    contactData:WaveFinancialAccountInput, 
    linkedUserId:string
  ) {
    //construct graphql query, getting account by id
    return;
  }

  async sync(data: SyncParam) {
    return;
  }
}
