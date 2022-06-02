export interface ISuccessResponse<D> {
  data: D;
}

export interface IErrorResponse<E> {
  code: number | string;
  message?: string;
  data?: E;
}

export type IServerResponse<D = unknown, E = unknown> = ISuccessResponse<D> | IErrorResponse<E>;

export const isErrorResponse = <D, E>(resp: IServerResponse<D, E>): resp is IErrorResponse<E> => {
  return 'code' in resp;
};
