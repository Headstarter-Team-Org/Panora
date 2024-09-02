import { DesunifyReturnType } from '@@core/utils/types/desunify.input';
import { OriginalContactOutput } from '@@core/utils/types/original/original.accounting';
import { WaveFinancialContactOutput } from './types';

export interface IContactMapper {
    desunify(
      source: UnifiedContactInput,
      customFieldMappings?: {
        slug: string;
        remote_id: string;
      }[]
    ): DesunifyReturnType;
  
    unify(
      source: OriginalContactOutput | OriginalContactOutput[],
      customFieldMappings?: {
        slug: string;
        remote_id: string;
      }[]
    ): Promise<UnifiedContactOutput | UnifiedContactOutput[]>;
  }
  export class My3rdPartyMapper implements IContactMapper {
    desunify(
      source: UnifiedContactInput,
      customFieldMappings?: {
        slug: string;
        remote_id: string;
      }[],
    ): WaveFinancialContactOutput {}
  
    unify(
      source: 3rdPartyContactOutput | 3rdPartyContactOutput[],
      customFieldMappings?: {
        slug: string;
        remote_id: string;
      }[],
    ): Promise<UnifiedContactOutput | UnifiedContactOutput[]> {}
  }
    