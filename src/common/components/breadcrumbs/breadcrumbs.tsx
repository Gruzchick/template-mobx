import { observer } from 'mobx-react';
import type { FC } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs as MuiBreadcrumbs, Chip } from '@mui/material';

import { URL_PATHS } from 'common/constants/url-paths';

import * as S from './styled';

export interface BreadcrumbsConfigItem {
  label: string;
  url?: string;
}

export interface IBreadcrumbsProps {
  breadcrumbsConfig: [...BreadcrumbsConfigItem[]];
}

export const Breadcrumbs: FC<IBreadcrumbsProps> = observer(({ breadcrumbsConfig }) => {
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate(URL_PATHS.MAIN);
  };

  return (
    <MuiBreadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
      <S.HomeButton onClick={navigateToHomePage}>
        <HomeIcon />
      </S.HomeButton>
      {breadcrumbsConfig.map((item) => {
        const { url, label } = item;

        return <Chip key={label} label={label} onClick={url ? () => navigate(url) : undefined} />;
      })}
    </MuiBreadcrumbs>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';
