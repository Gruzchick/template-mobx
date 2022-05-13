import { observer } from 'mobx-react-lite';
import type { FC } from 'react';
import React from 'react';

import { AppLayoutHeader } from '../app-layout-header';
import { AppLayoutSidebarMenu } from '../app-layout-sidebar-menu';
import { Loader } from '../loader';

import * as S from './styled';

export interface IAppLayoutProps {
  loading?: boolean;
}

export const AppLayout: FC<IAppLayoutProps> = observer(({ children, loading }) => {
  return (
    <>
      <S.Wrapper maxWidth={'xl'}>
        <S.Header>
          <AppLayoutHeader />
        </S.Header>
        <S.Body>
          <S.Sidebar>
            <AppLayoutSidebarMenu />
          </S.Sidebar>
          <S.Content>{children}</S.Content>
        </S.Body>
      </S.Wrapper>
      {loading && <Loader />}
    </>
  );
});

AppLayout.displayName = 'AppLayout';
