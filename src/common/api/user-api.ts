export const userApi = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getTokens: (data: {
    email: string;
    password: string;
  }): Promise<{ accessToken: string; refreshToken: string }> => {
    return new Promise((resolve) => {
      // TODO: add types for response, add errors
      setTimeout(() => {
        resolve({ refreshToken: 'xxxxx.yyyyy.zzzzz', accessToken: 'xxxxx.yyyyy.zzzzz' });
      }, 1000);
    });
  },
};
