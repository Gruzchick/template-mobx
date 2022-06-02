import type { INQUIRY_TYPES } from './inquiry';

export interface IGetCommissionAccountsResponseDto {
  id: string;
  balance: string;
  accountNumber: string;
}

export interface IGetCommissionValueRequestDto {
  accountId: string;
  inquiries: INQUIRY_TYPES[];
}

export interface IGetCommissionResponseDto {
  commissionValue: string;
}

export interface ICreateInquiryRequestDto {
  organization: string;
  account: string;
  commissionAccount: string;
  notifyByEmail: boolean;
  email: string;
  inquiries: {
    [INQUIRY_TYPES.OPEN_ACCOUNT]?: {
      inquiryType: INQUIRY_TYPES.OPEN_ACCOUNT;
      date: Date;
    };
    [INQUIRY_TYPES.CASH_BALANCE]?: {
      inquiryType: INQUIRY_TYPES.CASH_BALANCE;
      date: Date;
    };
    [INQUIRY_TYPES.FILE_CABINET]?: {
      inquiryType: INQUIRY_TYPES.FILE_CABINET;
      date: Date;
    };
    [INQUIRY_TYPES.INFORMATION_CURRENCY]?: {
      inquiryType: INQUIRY_TYPES.INFORMATION_CURRENCY;
      dateFrom: Date;
      dateTo: Date;
    };
    [INQUIRY_TYPES.ACCOUNT_RESTRICTION]?: {
      inquiryType: INQUIRY_TYPES.ACCOUNT_RESTRICTION;
    };
  };
}

export interface ICreateInquiryResponseDto extends ICreateInquiryRequestDto {
  id: string;
}
