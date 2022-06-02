import { makeAutoObservable } from 'mobx';

import { accountsApi } from 'common/api/dictionaries/accounts-api';
import { organizationsApi } from 'common/api/dictionaries/organizations-api';
import { dialogsStore } from 'common/components/diologs';
import { isErrorResponse } from 'common/types/api';
import type { IAccount } from 'common/types/models/account';
import type { IOrganization } from 'common/types/models/organization';

import { inquiryServiceApi } from 'inquiry-service/api/inquiry-service-api';
import type {
  IGetCommissionAccountsResponseDto,
  IGetCommissionValueRequestDto,
} from 'inquiry-service/types/dto';

import { InquiryFormStore } from './components/inquiry-form';
import { INQUIRY_FORM_FIELD_NAMES } from './types';

export class PageStore {
  form: InquiryFormStore;

  organizations: IOrganization[] = [];
  organizationsFetching = false;

  accounts: IAccount[] = [];
  accountsFetching = false;

  commissionAccounts: IGetCommissionAccountsResponseDto[] = [];
  commissionAccountsFetching = false;

  commissionValue = '';
  commissionValueFetching = false;

  constructor() {
    this.form = new InquiryFormStore(this);
    makeAutoObservable(this, {
      form: false,
    });
  }

  async init() {
    return await Promise.all([this.fetchOrganizations(), this.fetchCommissionAccounts()]);
  }

  fetchOrganizations = async () => {
    this.organizationsFetching = true;

    this.organizations = [];

    const resp = await organizationsApi.getOrganizations();

    this.organizationsFetching = false;

    if (!isErrorResponse(resp)) {
      this.organizations = resp.data;
    }

    return this.organizations;
  };

  fetchAccounts = async (orgId: string) => {
    this.accounts = [];

    this.accountsFetching = true;

    const resp = await accountsApi.getAccountsByOrgId({ orgId });

    this.accountsFetching = false;

    if (isErrorResponse(resp)) {
      void dialogsStore.showError('Для данной организации не удаётся получить список счетов');
    } else {
      this.accounts = resp.data;
    }

    return this.accounts;
  };

  fetchCommissionAccounts = async () => {
    this.commissionAccounts = [];

    this.commissionAccountsFetching = true;
    const resp = await inquiryServiceApi.getCommissionAccounts();
    this.commissionAccountsFetching = false;

    if (!isErrorResponse(resp)) {
      this.commissionAccounts = resp.data;
    }

    return this.commissionAccounts;
  };

  fetchCommissionValue = async (data: IGetCommissionValueRequestDto) => {
    this.commissionValueFetching = true;

    const resp = await inquiryServiceApi.getCommissionValue(data);

    if (!isErrorResponse(resp)) {
      this.commissionValue = resp.data.commissionValue;
    }

    this.form.$(INQUIRY_FORM_FIELD_NAMES.COMMISSION_ACCOUNT);

    this.commissionValueFetching = false;
  };
}
