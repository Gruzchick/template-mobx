import { observer } from 'mobx-react';
import type { FC } from 'react';
import React from 'react';

import { CircularProgress } from '@mui/material';

import * as S from './styled';

export const Loader: FC = observer(() => (
  <S.Backdrop open>
    <CircularProgress size={60} />
  </S.Backdrop>
));

Loader.displayName = 'Loader';
