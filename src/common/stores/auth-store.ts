import { makeAutoObservable } from 'mobx';

import { authApi } from 'common/api/auth-api';
import { isErrorResponse } from 'common/types/api';

interface IParsedToken {
  userId: string;
  firsName: string;
  secondName: string;
  patronymic: string;
  authorities: string[];
}

export const jwtLibraryStub = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parseToken(accessToken: string): IParsedToken {
    return {
      userId: 'e63e8472-22b2-46c1-9e1e-525ddc089daf',
      firsName: 'Иван',
      secondName: 'Иванов',
      patronymic: 'Иванович',
      authorities: [],
    };
  },
};

export class AuthStore {
  private _accessToken?: string;

  refreshToken?: string;
  parsedToken?: IParsedToken;

  tokensFetching = false;

  constructor() {
    makeAutoObservable(this);
  }

  get isAuthorized(): boolean {
    return Boolean(this._accessToken);
  }

  set accessToken(accessToken: string) {
    this._accessToken = accessToken;
    this.parsedToken = jwtLibraryStub.parseToken(accessToken);
  }

  get accessToken() {
    return this._accessToken ?? '';
  }

  logIn = async (data: { email: string; password: string }) => {
    this.tokensFetching = true;
    const resp = await authApi.getTokensByCredentials(data);
    this.tokensFetching = false;

    if (!isErrorResponse(resp)) {
      this.accessToken = resp.data.accessToken;
      this.refreshToken = resp.data.refreshToken;
    }
  };

  logOut = () => {
    this._accessToken = undefined;
    this.refreshToken = undefined;
    this.parsedToken = undefined;
  };
}

export const authStore = new AuthStore();
