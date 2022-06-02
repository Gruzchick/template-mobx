import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FormRowStyled = styled(Grid)`
  margin-bottom: 24px;
`;

export const GrayTextStyled = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;
