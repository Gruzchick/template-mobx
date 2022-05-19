import { observer } from 'mobx-react';
import type { FC } from 'react';
import React from 'react';

import type { IBreadcrumbsProps } from 'common/components/breadcrumbs/breadcrumbs';
import { Breadcrumbs } from 'common/components/breadcrumbs/breadcrumbs';

import * as S from './styled';

export interface ITopLineProps {
  breadcrumbsConfig: IBreadcrumbsProps['breadcrumbsConfig'];
}

export const TopLine: FC<ITopLineProps> = observer(({ breadcrumbsConfig, children }) => {
  return (
    <S.Wrapper justifyContent={'space-between'} direction={'row'}>
      <Breadcrumbs breadcrumbsConfig={breadcrumbsConfig} />
      {children}
    </S.Wrapper>
  );
});

TopLine.displayName = 'TopLine';
