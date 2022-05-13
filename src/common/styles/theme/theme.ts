import { createTheme } from '@mui/material/styles';

import { components } from './components-styling';
import { scrollbarBgcLight, thumbBgcLight } from './theme-constants';

// TODO: implement color mode switching
export const theme = createTheme({
  scrollbars: {
    scrollbarBg: scrollbarBgcLight,
    thumbBg: thumbBgcLight,
  },
  components,
});
