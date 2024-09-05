import {
  UnifiedAccountingCompanyinfoInput,
  UnifiedAccountingCompanyinfoOutput,
} from '@accounting/companyinfo/types/model.unified';
import { WaveFinancialCompanyInput, WaveFinancialCompanyOutput } from './types';
import { ICompanyInfoMapper } from '@accounting/companyinfo/types';

export class WaveFinancialCompanyMapper implements ICompanyInfoMapper {
  desunify(
    source: UnifiedAccountingCompanyinfoInput,
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): Promise<WaveFinancialCompanyInput> {
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
    UnifiedAccountingCompanyinfoOutput | UnifiedAccountingCompanyinfoOutput[]
  > {
    return Promise.resolve({});
  }
}
