export type CountryCode = string;
export type CurrencyCode = string;

export interface Province {
  slug?: string; // Marked as deprecated in the API
  code: string;
  name: string;
}

export interface Country {
  code: CountryCode;
  name: string;
  currency: Currency;
  nameWithArticle?: string; //Name of the country with the appropriate article, e.g. "the United States"
  provinces: Province[];
}

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  name: string;
  plural?: string; //Plural version of currency name
  exponent?: number; //The number of digits found to the right of the decimal place to represent the fractional part of this currency (assumes a base of 10).
}

export interface WaveFinancialAddress {
  addressLine1: string;
  addressLine2: string;
  city: string;
  province: Province;
  country: Country;
  postalCode: string;
}
export type WaveFinancialAddressInput = Partial<WaveFinancialAddress>;
export type WaveFinancialAddressOutput = WaveFinancialAddressInput;
