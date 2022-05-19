import 'react-hot-loader';

import { observer } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from 'react-router';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { AppLayout } from 'common/components/app-layout';
import { GlobalLoader } from 'common/components/global-loader';
import { AppBrowserRouter, history } from 'common/router';
import { theme } from 'common/styles/theme';

import { inquiryServiceRoutes } from 'services/inquiry-service/inquiry-service-routes';
import { mainServiceRoutes } from 'services/main-page-service/main-service-routes';
import { statisticsServiceRoutes } from 'services/statistics-service/statistics-service-routes';

const App = observer(() => {
  return (
    <AppBrowserRouter history={history}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppLayout>
          <Routes>
            {[...mainServiceRoutes, ...inquiryServiceRoutes, ...statisticsServiceRoutes]}
          </Routes>
        </AppLayout>
        <GlobalLoader />
      </ThemeProvider>
    </AppBrowserRouter>
  );
});

ReactDOM.render(<App />, document.querySelector('#root'));
