import { organizations } from 'common/mock/organizations';
import type { IServerResponse } from 'common/types/api';
import type { IOrganization } from 'common/types/models/organization';

export const organizationsApi = {
  getOrganizations: (): Promise<IServerResponse<Array<IOrganization>>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: organizations,
        });
      }, 1000);
    });
  },
};
