import { Injectable } from '@nestjs/common';
import { ApiResponse } from '@@core/utils/types';
import { AccountingObjectInput } from '@@core/utils/types/original/original.accounting';
import { WaveFinancialContactOutput } from './types';
import { IContactService } from '@accounting/contact/types';
import { SyncParam } from '@@core/utils/types/interface';

@Injectable()
export class WaveFinancial implements IContactService {
  addContact(contactData: AccountingObjectInput, linkedUserId: string) {
    return Promise<ApiResponse<WaveFinancialContactOutput>>;
  }

  sync(data: SyncParam) {
    return Promise<ApiResponse<WaveFinancialContactOutput[]>>;
  }
}
