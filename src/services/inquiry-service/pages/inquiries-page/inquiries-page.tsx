import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { AppLayoutContent } from 'common/components/app-layout';
import { TopLine } from 'common/components/top-line';
import { URL_PATHS } from 'common/constants/url-paths';

import { BREADCRUMBS_CONFIG } from './constants';

export const Banner = styled(Typography)`
  margin-top: 50px;
  text-align: center;
`;

export const InquiriesPage = observer(() => {
  const navigate = useNavigate();

  const topLineButtons = useMemo(() => {
    return (
      <Button
        startIcon={<AddIcon />}
        onClick={() => navigate(`${URL_PATHS.INQUIRIES}/${URL_PATHS.NEW}`)}
        size={'small'}
        variant={'outlined'}
      >
        Новая справка
      </Button>
    );
  }, [navigate]);

  return (
    <AppLayoutContent>
      <TopLine breadcrumbsConfig={BREADCRUMBS_CONFIG}>{topLineButtons}</TopLine>
      <Banner variant={'h3'}>Справки</Banner>
    </AppLayoutContent>
  );
});

InquiriesPage.displayName = 'InquiriesPage';
