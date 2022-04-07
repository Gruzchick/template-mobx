import 'react-hot-loader';

import { Global, ThemeProvider } from '@emotion/react';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import { appTheme } from './common/styles/appTheme';
import { globalCSS } from './common/styles/globalCSS';
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

ReactDOM.render(<App />, document.getElementById('root'));
