import { observer } from 'mobx-react';
import type { FC } from 'react';
import React from 'react';

import * as S from './styled';

export const AppLayoutSidebarMenu: FC = observer(() => <S.Wrapper />);

AppLayoutSidebarMenu.displayName = 'AppLayoutSidebarMenu';
