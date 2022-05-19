import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Overlay = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: progress;
`;

export const Loader = styled(CircularProgress)`
  position: absolute;
  top: 20px;
  right: 7px;
  margin-top: -12px;
  margin-left: -12px;
  cursor: progress;
`;
