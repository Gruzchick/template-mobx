import type { ICreateInquiryRequestDto } from 'inquiry-service/types/dto';
import type { INQUIRY_TYPES } from 'inquiry-service/types/inquiry';

import type { PageStore } from './page-store';

export interface IInquiryPageContext {
  pageStore: PageStore;
}

export enum INQUIRY_FORM_FIELD_NAMES {
  ORGANIZATION = 'organization',
  ACCOUNTS = 'account',
  COMMISSION_ACCOUNT = 'commissionAccount',
  NOTIFY_BY_EMAIL = 'notifyByEmail',
  EMAIL = 'email',
  INQUIRIES = 'inquiries',
}

export type InquiryFormValues = ICreateInquiryRequestDto;

export interface InquiryAddFormOpenAccount {
  inquiryType: INQUIRY_TYPES.OPEN_ACCOUNT | INQUIRY_TYPES.CASH_BALANCE | INQUIRY_TYPES.FILE_CABINET;
  date?: Date;
}

export interface InquiryAddFormInformationCurrency {
  inquiryType: INQUIRY_TYPES.INFORMATION_CURRENCY;
  dateFrom?: Date;
  dateTo?: Date;
}

export interface InquiryAddFormAccountRestriction {
  inquiryType: INQUIRY_TYPES.ACCOUNT_RESTRICTION;
}

export type InquiryAddFormValues =
  | InquiryAddFormOpenAccount
  | InquiryAddFormInformationCurrency
  | InquiryAddFormAccountRestriction;

export enum INQUIRY_ADD_FORM_FIELD_NAMES {
  INQUIRY_TYPE = 'inquiryType',
  DATE = 'date',
  DATE_FROM = 'dateFrom',
  DATE_TO = 'dateTo',
}
