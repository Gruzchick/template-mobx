import 'react-hot-loader';

import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Routes } from 'react-router';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { AppLayout } from 'common/components/app-layout';
import { Dialogs } from 'common/components/diologs';
import { GlobalLoader } from 'common/components/global-loader';
import { useGlobalLoader } from 'common/components/global-loader/use-global-loader';
import { AppBrowserRouter, history } from 'common/router';
import { authStore } from 'common/stores/auth-store';
import { theme } from 'common/styles/theme';

import { inquiryServiceRoutes } from 'services/inquiry-service/inquiry-service-routes';
import { mainServiceRoutes } from 'services/main-page-service/main-service-routes';
import { statisticsServiceRoutes } from 'services/statistics-service/statistics-service-routes';

const App = observer(() => {
  useGlobalLoader(authStore.tokensFetching);

  useEffect(() => {
    void authStore.logIn({ email: '', password: '' }); // TODO: Сделать страницу авторизации
  }, []);

  return (
    <AppBrowserRouter history={history}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {authStore.isAuthorized && (
          <AppLayout>
            <Routes>
              {[...mainServiceRoutes, ...inquiryServiceRoutes, ...statisticsServiceRoutes]}
            </Routes>
          </AppLayout>
        )}
        <Dialogs />
        <GlobalLoader />
      </ThemeProvider>
    </AppBrowserRouter>
  );
});

ReactDOM.render(<App />, document.querySelector('#root'));
