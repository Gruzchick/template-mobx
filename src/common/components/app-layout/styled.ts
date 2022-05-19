import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  display: flex;
  overflow: hidden;
  height: 100vh;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.background.default};
  box-shadow: ${({ theme }) => theme.shadows[2]};
`;

export const Header = styled('div')`
  flex: 0 0 auto;
`;

export const Body = styled('div')`
  display: flex;
  overflow: hidden;
  flex: 1 1 auto;
`;

export const Sidebar = styled('div')`
  flex: 0 0 auto;
`;

export const ContentArea = styled('div')`
  display: flex;
  height: 100%;
  flex: 1 1 auto;
  flex-direction: column;
`;

export const TopLine = styled('div')`
  flex: 0 0 auto;
`;

export const Content = styled('div')`
  overflow: auto;
  flex: 1 1 auto;
`;
