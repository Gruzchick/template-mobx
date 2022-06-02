import type { IServerResponse } from 'common/types/api';
import type {
  IGetTokensByCredentialsRequsDto,
  IGetTokensByCredentialsResponseDto,
} from 'common/types/dtos';

export const authApi = {
  getTokensByCredentials: (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    credentials: IGetTokensByCredentialsRequsDto,
  ): Promise<IServerResponse<IGetTokensByCredentialsResponseDto>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: { refreshToken: 'xxxxx.yyyyy.zzzzz', accessToken: 'xxxxx.yyyyy.zzzzz' },
        });
      }, 1500);
    });
  },
};
