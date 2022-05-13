// import 'react-hot-loader';

import { observer } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from 'common/styles/theme';
import { InquiryFormPage } from 'services/inquiry-service/pages/inquiry-form-page';

const App = observer(() => (
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <InquiryFormPage />
    </ThemeProvider>
  </>
));

ReactDOM.render(<App />, document.querySelector('#root'));
