import Brightness1Icon from '@mui/icons-material/Brightness1';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  width: 120px;
  height: 100%;
  padding-top: 17px;
  background-color: ${({ theme }) => theme.palette.primary.light};
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const MenuItemWrapper = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>`
  position: relative;
  width: 100%;
  padding: 8px 16px;
  color: ${({ isActive, theme }) =>
    isActive ? theme.palette.common.white : theme.palette.grey.A200};
  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
  text-align: center;
  user-select: none;
  .MuiTypography-root {
    line-height: 1.4;
  }
  &:hover {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;

export const ActiveMark = styled(Brightness1Icon)`
  position: absolute;
  top: 6px;
  right: 47px;
  font-size: 10px;
`;
