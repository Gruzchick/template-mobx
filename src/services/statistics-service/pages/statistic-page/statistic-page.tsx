import { observer } from 'mobx-react-lite';
import React from 'react';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { AppLayoutContent } from 'common/components/app-layout';
import { TopLine } from 'common/components/top-line';

import { BREADCRUMBS_CONFIG } from './constants';

export const Banner = styled(Typography)`
  margin-top: 50px;
  text-align: center;
`;

export const StatisticPage = observer(() => {
  return (
    <AppLayoutContent>
      <TopLine breadcrumbsConfig={BREADCRUMBS_CONFIG} />
      <Banner variant={'h3'}>Статистика</Banner>
    </AppLayoutContent>
  );
});

StatisticPage.displayName = 'StubServicePage';
