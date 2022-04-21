import 'react-hot-loader';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from 'common/styles/theme';
import { InquiryFormPage } from 'services/inquiry-service/inquiry-form-page';

const App = hot(() => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <InquiryFormPage />
      </ThemeProvider>
    </Fragment>
  );
});

ReactDOM.render(<App />, document.querySelector('#root'));
