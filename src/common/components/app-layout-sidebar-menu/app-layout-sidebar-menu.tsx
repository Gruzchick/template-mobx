import { observer } from 'mobx-react';
import type { FC } from 'react';
import React from 'react';
import { useLocation, useNavigate, useResolvedPath } from 'react-router-dom';

import { Typography } from '@mui/material';

import { MENU_CONFIG } from './constants';

import * as S from './styled';

export const AppLayoutSidebarMenu: FC = observer(() => {
  return (
    <S.Wrapper>
      {MENU_CONFIG.map(({ label, to, Icon }) => {
        const navigate = useNavigate();

        const location = useLocation();
        const path = useResolvedPath(to);

        const isActive = location.pathname === path.pathname;

        const handleClick = () => {
          navigate(to);
        };

        return (
          <S.MenuItemWrapper
            key={to}
            onClick={handleClick}
            direction={'column'}
            alignItems={'center'}
            color={'green'}
            isActive={isActive}
          >
            <Icon />
            <Typography variant={'caption'}>{label}</Typography>
          </S.MenuItemWrapper>
        );
      })}
    </S.Wrapper>
  );
});

AppLayoutSidebarMenu.displayName = 'AppLayoutSidebarMenu';
