import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Stack)`
  padding: 14px 32px 14px 22px;
  border-bottom: 2px solid ${({ theme }) => theme.palette.divider};
`;
