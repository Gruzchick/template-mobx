import { Container } from '@material-ui/core';
import React from 'react';

import { wrapperCSS } from './styles';
import st from './styles.module.scss';

export const MainPage = () => {
  return (
    <Container className={st.color} maxWidth="md" css={wrapperCSS}>
      Hello world
    </Container>
  );
};
