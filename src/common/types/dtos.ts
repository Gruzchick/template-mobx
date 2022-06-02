export interface IGetTokensByCredentialsRequsDto {
  email: string;
  password: string;
}

export interface IGetTokensByCredentialsResponseDto {
  accessToken: string;
  refreshToken: string;
}

export interface IGetAccountsByOrgIdRequestDto {
  orgId: string;
}
