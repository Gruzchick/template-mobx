import { organizations } from 'common/mock/organizations';
import type { IOrganization } from 'common/types/models/organization';

export const organizationsApi = {
  fetchOrganizations: (): Promise<Array<IOrganization>> => {
    return new Promise((resolve) => {
      // TODO: add types for response, add errors
      setTimeout(() => {
        resolve(organizations);
      }, 1000);
    });
  },
};
