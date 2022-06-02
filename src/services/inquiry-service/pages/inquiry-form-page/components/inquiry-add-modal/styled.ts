import { DialogContent as MuiDialogContent, Paper as MuiPaper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Paper = styled(MuiPaper)`
  &.MuiPaper-root {
    overflow: visible;
  }
`;

export const DialogContent = styled(MuiDialogContent)`
  &.MuiDialogContent-root {
    overflow: visible;
  }
`;
