import { css } from '@emotion/react';

import { robotoFont } from './fonts';
import { resetCSS } from './resetCSS';

export const globalCSS = (_) => css`
  ${robotoFont}

  ${resetCSS}
  
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
  }
`;
