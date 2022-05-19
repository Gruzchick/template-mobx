import { observer } from 'mobx-react-lite';
import React from 'react';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { AppLayoutContent } from 'common/components/app-layout';

export const Banner = styled(Typography)`
  margin-top: 50px;
  text-align: center;
`;

export const MainPage = observer(() => {
  return (
    <AppLayoutContent>
      <Banner variant={'h3'}>Главная страница</Banner>
    </AppLayoutContent>
  );
});

MainPage.displayName = 'MainPage';
