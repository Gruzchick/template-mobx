import { observer } from 'mobx-react';
import type { FC } from 'react';
import React from 'react';

import * as S from './styled';

export const AppLayoutHeader: FC = observer(() => <S.Wrapper />);

AppLayoutHeader.displayName = 'AppLayoutHeader';
