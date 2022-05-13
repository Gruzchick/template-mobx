import { commissionAccounts } from '../mock/commission-accounts';
import type { ICommissionAccountsResponseDto } from '../types/dtos/commission-accounts-response-dto';

export const inquiryServiceApi = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fetchCommissionAccounts: (): Promise<Array<ICommissionAccountsResponseDto>> => {
    return new Promise((resolve) => {
      // TODO: add types for response, add errors
      setTimeout(() => {
        resolve(commissionAccounts);
      }, 1000);
    });
  },
};
