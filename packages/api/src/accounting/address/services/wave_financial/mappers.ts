import {
  UnifiedAccountingAddressInput,
  UnifiedAccountingAddressOutput,
} from '@accounting/address/types/model.unified';
import { WaveFinancialAddressInput, WaveFinancialAddressOutput } from './types';
import { IAddressMapper } from '@accounting/address/types';
import { MappersRegistry } from '@@core/@core-services/registries/mappers.registry';
import { Utils } from '@accounting/address/utils';

export class WaveFinancialAddressMapper implements IAddressMapper {
  constructor(private mappersRegistry: MappersRegistry, private utils: Utils) {
    this.mappersRegistry.registerService(
      'accounting',
      'address',
      'wave_financial',
      this,
    );
  }

  desunify(
    source: UnifiedAccountingAddressInput,
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): Promise<WaveFinancialAddressInput> {
    return Promise.resolve({});
  }

  unify(
    source: any,
    connectionId: string,
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): Promise<
    UnifiedAccountingAddressOutput | UnifiedAccountingAddressOutput[]
  > {
    return Promise.resolve({});
  }
}
