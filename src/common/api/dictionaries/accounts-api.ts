import { accounts } from 'common/mock/accounts';
import type { IAccount } from 'common/types/models/account';

export const accountsApi = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fetchAccountsByOrgId: ({ id }: { id: string }): Promise<Array<IAccount>> => {
    return new Promise((resolve) => {
      // TODO: add types for response, add errors
      setTimeout(() => {
        resolve(accounts);
      }, 2000);
    });
  },
};
