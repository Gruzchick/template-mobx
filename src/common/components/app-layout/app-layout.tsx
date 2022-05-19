import { observer } from 'mobx-react-lite';
import type { FC } from 'react';
import React from 'react';

import { Container } from '@mui/material';

import { AppLayoutHeader } from '../app-layout-header';
import { AppLayoutSidebarMenu } from '../app-layout-sidebar-menu';

import * as S from './styled';

export const AppLayout: FC = observer(({ children }) => {
  return (
    <Container maxWidth={'xl'}>
      <S.Wrapper>
        <S.Header>
          <AppLayoutHeader />
        </S.Header>
        <S.Body>
          <S.Sidebar>
            <AppLayoutSidebarMenu />
          </S.Sidebar>
          <S.ContentArea>{children}</S.ContentArea>
        </S.Body>
      </S.Wrapper>
    </Container>
  );
});

AppLayout.displayName = 'AppLayout';
