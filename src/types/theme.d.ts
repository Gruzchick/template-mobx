// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Theme, ThemeOptions } from '@mui/material/styles';

/** @se {@link https://mui.com/material-ui/customization/theming/#custom-variables} */
declare module '@mui/material/styles' {
  interface Theme {
    scrollbars: {
      scrollbarBg: string;
      thumbBg: string;
    };
  }
  interface ThemeOptions {
    scrollbars?: {
      scrollbarBg: string;
      thumbBg: string;
    };
  }
}
