import { makeAutoObservable } from 'mobx';

import { accountsApi } from 'common/api/dictionaries/accounts-api';
import { organizationsApi } from 'common/api/dictionaries/organizations-api';
import type { IAccount } from 'common/types/models/account';
import type { IOrganization } from 'common/types/models/organization';
import { inquiryServiceApi } from 'services/inquiry-service/api/inquiry-service-api';
import type { ICommissionAccountsResponseDto } from 'services/inquiry-service/types/dtos/commission-accounts-response-dto';

import { InquiryFormStore } from './inquiry-form-store';

export class InquiryFormPageStore {
  form: InquiryFormStore;

  organizations: IOrganization[] = [];
  organizationsFetching = false;

  accounts: IAccount[] = [];
  accountsFetching = false;

  commissionAccounts: ICommissionAccountsResponseDto[] = [];
  commissionAccountsFetching = false;

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

    this.organizations = await organizationsApi.fetchOrganizations();

    this.organizationsFetching = false;

    return this.organizations;
  };

  fetchAccounts = async (id: string) => {
    this.accountsFetching = true;

    this.accounts = [];

    this.accounts = await accountsApi.fetchAccountsByOrgId({ id });

    this.accountsFetching = false;

    return this.accounts;
  };

  fetchCommissionAccounts = async () => {
    this.commissionAccountsFetching = true;

    this.commissionAccounts = [];

    this.commissionAccounts = await inquiryServiceApi.fetchCommissionAccounts();

    this.commissionAccountsFetching = false;

    return this.commissionAccounts;
  };
}
