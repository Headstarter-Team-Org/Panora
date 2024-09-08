export interface WaveFinancialAccount {
    business: Business;
    id: ID;
    classicId: string | null;
    name: string;
    description: string | null;
    displayId: string | null;
    currency: Currency;
    type: AccountType;
    subtype: AccountSubtype;
    normalBalanceType: AccountNormalBalanceType;
    isArchived: boolean;
    sequence: number;
    balance: number | null;
    balanceInBussinessCurrency: number | null;
}

export enum AccountNormalBalanceType {
    DEBIT = "DEBIT",
    CREDIT = "CREDIT",
}

export enum AccountSubtype {
    CASH_AND_BANK = "CASH_AND_BANK",
    CREDIT_CARD = "CREDIT_CARD",
    OTHER_CURRENT_ASSET = "OTHER_CURRENT_ASSET",
    OTHER_ASSET = "OTHER_ASSET",
    ACCOUNTS_RECEIVABLE = "ACCOUNTS_RECEIVABLE",
    ACCOUNTS_PAYABLE = "ACCOUNTS_PAYABLE",
    CREDIT_CARD_PAYABLE = "CREDIT_CARD_PAYABLE",
    LONG_TERM_DEBT = "LONG_TERM_DEBT",
    OTHER_CURRENT_LIABILITY = "OTHER_CURRENT_LIABILITY",
    OTHER_LIABILITY = "OTHER_LIABILITY",
    OWNERS_EQUITY = "OWNERS_EQUITY",
    RETAINED_EARNINGS = "RETAINED_EARNINGS",
    INCOME = "INCOME",
    COST_OF_GOODS_SOLD = "COST_OF_GOODS_SOLD",
    EXPENSE = "EXPENSE",
    OTHER_INCOME = "OTHER_INCOME",
    OTHER_EXPENSE = "OTHER_EXPENSE",
}

export enum AccountType {
    ASSET = "ASSET",
    LIABILITY = "LIABILITY",
    EQUITY = "EQUITY",
    INCOME = "INCOME",
    EXPENSE = "EXPENSE",
}

export interface Currency {
    code: string;
    name: string;
    symbol: string;
}

export interface Business {
    id: ID;
    name: string;
    isPersonal: boolean;
    currency: Currency;
}

export type ID = string;
export type WaveFinancialAccountInput = Partial<WaveFinancialAccount>;
export type WaveFinancialAccountOutput = WaveFinancialAccountInput;
