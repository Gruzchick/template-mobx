import { Container } from '@mui/material';
import { styled } from '@mui/system';

export const Wrapper = styled(Container)`
  display: flex;
  overflow: hidden;
  height: 100vh;
  flex-direction: column;
`;

export const Header = styled('div')`
  flex: 0 0 auto;
`;

export const Body = styled('div')`
  display: flex;
  height: 100%;
  flex: 1 1 auto;
`;

export const Sidebar = styled('div')`
  flex: 0 0 auto;
`;

export const Content = styled('div')`
  height: 100%;
  flex: 1 1 auto;
`;
