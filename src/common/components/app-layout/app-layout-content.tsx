import { observer } from 'mobx-react';
import type { FC } from 'react';
import React from 'react';

import * as S from './styled';

export interface IAppLayoutContentProps {
  children: [topLine: React.ReactNode, content: React.ReactNode] | React.ReactNode;
}

export const AppLayoutContent: FC<IAppLayoutContentProps> = observer(({ children }) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <>
      {childrenArray[1] && <S.TopLine>{childrenArray[0]}</S.TopLine>}
      <S.Content>{childrenArray[1] || childrenArray[0]}</S.Content>
    </>
  );
});

AppLayoutContent.displayName = 'AppLayoutContent';
