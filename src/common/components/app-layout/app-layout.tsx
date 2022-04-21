import React, { FC } from 'react';

import { AppLayoutHeader } from '../app-layout-header';
import { AppLayoutSidebarMenu } from '../app-layout-sidebar-menu';

import * as S from './styled';

export const AppLayout: FC = ({ children }) => {
  return (
    <S.AppLayout__Wrapper maxWidth={'xl'}>
      <S.AppLayout__Header>
        <AppLayoutHeader />
      </S.AppLayout__Header>
      <S.AppLayout__Body>
        <S.AppLayout__Sidebar>
          <AppLayoutSidebarMenu />
        </S.AppLayout__Sidebar>
        <S.AppLayout__Content>{children}</S.AppLayout__Content>
      </S.AppLayout__Body>
    </S.AppLayout__Wrapper>
  );
};

AppLayout.displayName = 'MainLayout';
