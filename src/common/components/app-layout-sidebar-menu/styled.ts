import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  width: 120px;
  height: 100%;
  padding-top: 17px;
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => theme.palette.primary.main},
    ${({ theme }) => theme.palette.primary.light}
  );
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const MenuItemWrapper = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>`
  width: 100%;
  padding: 8px 16px;
  color: ${({ isActive, theme }) =>
    isActive ? theme.palette.common.white : theme.palette.grey[400]};
  cursor: pointer;
  text-align: center;
  .MuiTypography-root {
    line-height: 1.4;
  }
  &:hover {
    color: ${({ isActive, theme }) =>
      isActive ? theme.palette.common.white : theme.palette.grey[300]};
  }
`;
