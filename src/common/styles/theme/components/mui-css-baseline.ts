import { css } from '@emotion/react';

import { Components } from '@mui/material/styles/components';

import { scrollbarBgcLight, thumbBgcLight } from '../theme-constants';

/** @see {@link https://mui.com/material-ui/customization/how-to-customize/#OverrideCssBaseline.tsx} */
export const muiCssBaseline: Components['MuiCssBaseline'] = {
  styleOverrides: css`
    * {
      scrollbar-color: ${thumbBgcLight} ${scrollbarBgcLight};
      scrollbar-width: thin;
    }
    *::-webkit-scrollbar {
      width: 6px;
    }
    *::-webkit-scrollbar-track {
      background: ${scrollbarBgcLight};
    }
    *::-webkit-scrollbar-thumb {
      border: 1px solid ${thumbBgcLight};
      background-color: ${thumbBgcLight};
      border-radius: 3px;
    }
  `.styles,
};
