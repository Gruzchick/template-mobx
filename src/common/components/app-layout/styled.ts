import { Container } from '@mui/material';
import { styled } from '@mui/system';

export const AppLayout__Wrapper = styled(Container)`
  display: flex;
  overflow: hidden;
  height: 100vh;
  flex-direction: column;
`;

export const AppLayout__Header = styled('div')`
  flex: 0 0 auto;
`;

export const AppLayout__Body = styled('div')`
  display: flex;
  height: 100%;
  flex: 1 1 auto;
`;

export const AppLayout__Sidebar = styled('div')`
  flex: 0 0 auto;
`;

export const AppLayout__Content = styled('div')`
  height: 100%;
  flex: 1 1 auto;
`;
