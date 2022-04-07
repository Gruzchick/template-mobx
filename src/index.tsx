import 'react-hot-loader';

import { Global, ThemeProvider } from '@emotion/react';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import { appTheme } from './common/styles/app-theme';
import { globalCSS } from './common/styles/global-css';
import { MainPage } from './pages/main-page';

const App = hot(() => {
  return (
    <Fragment>
      <Global styles={globalCSS(appTheme)} />
      <ThemeProvider theme={appTheme}>
        <MainPage />
      </ThemeProvider>
    </Fragment>
  );
});

ReactDOM.render(<App />, document.querySelector('#root'));
