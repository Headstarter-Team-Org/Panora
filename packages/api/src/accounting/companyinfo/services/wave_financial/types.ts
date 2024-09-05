export interface WaveFinancialCompany {
  id: string;
  name: string;
  isPersonal: boolean;
  organizationalType: string;
  type: string;
  subtype: string | null;
  currency: string;
  timezone: string;
  address: string;
  phone: string;
  fax: string;
  tollFree: string;
  website: string;
  email: string;
  createdAt: string;
}
export type WaveFinancialCompanyInput = Partial<WaveFinancialCompany>;
export type WaveFinancialCompanyOutput = WaveFinancialCompanyInput;
