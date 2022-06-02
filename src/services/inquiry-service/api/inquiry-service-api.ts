import type { IServerResponse } from 'common/types/api';

import { commissionAccounts } from 'inquiry-service/mock/commission-accounts';

import type {
  ICreateInquiryRequestDto,
  ICreateInquiryResponseDto,
  IGetCommissionAccountsResponseDto,
  IGetCommissionResponseDto,
  IGetCommissionValueRequestDto,
} from '../types/dto';

export const inquiryServiceApi = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getCommissionAccounts: (): Promise<IServerResponse<Array<IGetCommissionAccountsResponseDto>>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: commissionAccounts,
        });
      }, 1000);
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  checkOrganization: (orgId: string): Promise<IServerResponse<boolean>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (orgId === 'af0fc363984d4da79e53accaae8803d0') {
          resolve({
            code: 1,
          });
        } else {
          resolve({
            data: true,
          });
        }
      }, 1000);
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getCommissionValue: ({
    inquiries,
  }: IGetCommissionValueRequestDto): Promise<IServerResponse<IGetCommissionResponseDto>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            commissionValue: `${inquiries.length * 100}.00`,
          },
        });
      }, 1500);
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createInquiry: (
    document: ICreateInquiryRequestDto,
  ): Promise<IServerResponse<ICreateInquiryResponseDto>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (document.commissionAccount === 'f3c9c5cc978344e8b7abc67f82c41fe0') {
          resolve({
            code: 1,
            message: 'Недостаточно средств на счёте для списания комиссии.',
          });
        } else {
          resolve({
            data: {
              id: 'a5b3749c-ddec-46c9-982f-5b822957feff',
              ...document,
            },
          });
        }
      }, 1500);
    });
  },
};
