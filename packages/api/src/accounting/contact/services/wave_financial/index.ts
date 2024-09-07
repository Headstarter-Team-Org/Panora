import { Injectable } from '@nestjs/common';
import { EncryptionService } from '@@core/@core-services/encryption/encryption.service';
import { LoggerService } from '@@core/@core-services/logger/logger.service';
import { PrismaService } from '@@core/@core-services/prisma/prisma.service';
import { ServiceRegistry } from '../registry.service';
import { AccountingObjectInput } from '@@core/utils/types/original/original.accounting';
import { AccountingObject } from '@accounting/@lib/@types';
import { IContactService } from '@accounting/contact/types';
import { SyncParam } from '@@core/utils/types/interface';

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
    this.registry.registerService('my3rdParty', this);
  }
  addContact(contactData: AccountingObjectInput, linkedUserId: string) {
    
    return;
  }

  sync(data: SyncParam) {
    return;s
  }
}
