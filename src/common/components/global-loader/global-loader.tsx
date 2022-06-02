import { observer } from 'mobx-react';
import type { FC } from 'react';
import React from 'react';

import { CircularProgress } from '@mui/material';

import { loaderStore } from './loader-store';

import * as S from './styled';

export const GlobalLoader: FC = observer(() => {
  const { isLoading } = loaderStore;

  return (
    <S.Backdrop open={isLoading}>
      <CircularProgress size={60} />
    </S.Backdrop>
  );
});

GlobalLoader.displayName = 'GlobalLoader';
