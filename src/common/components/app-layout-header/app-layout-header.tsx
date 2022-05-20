import { observer } from 'mobx-react';
import type { FC } from 'react';
import React from 'react';
import { useNavigate } from 'react-router';

import AccountCircle from '@mui/icons-material/AccountCircle';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';

import { URL_PATHS } from 'common/constants/url-paths';

import * as S from './styled';

export const AppLayoutHeader: FC = observer(() => {
  const navigate = useNavigate();

  return (
    <AppBar color={'transparent'} position="static">
      <Toolbar>
        <Stack direction={'row'} justifyContent={'space-between'} sx={{ width: '100%' }}>
          <S.Logo
            color={'primary'}
            fontWeight={'bolder'}
            variant="h4"
            component="div"
            onClick={() => navigate(URL_PATHS.MAIN)}
          >
            LoGo
          </S.Logo>
          <div>
            <IconButton size="large" color="primary">
              <AccountCircle />
            </IconButton>
          </div>{' '}
        </Stack>
      </Toolbar>
    </AppBar>
  );
});

AppLayoutHeader.displayName = 'AppLayoutHeader';
