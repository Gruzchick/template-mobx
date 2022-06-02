import { accounts } from 'common/mock/accounts';
import type { IServerResponse } from 'common/types/api';
import type { IGetAccountsByOrgIdRequestDto } from 'common/types/dtos';
import type { IAccount } from 'common/types/models/account';

export const accountsApi = {
  getAccountsByOrgId: ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    orgId,
  }: IGetAccountsByOrgIdRequestDto): Promise<IServerResponse<Array<IAccount>>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: accounts,
        });
      }, 1500);
    });
  },
};
