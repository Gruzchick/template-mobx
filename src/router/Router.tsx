import React from 'react';
import { Route } from 'react-router';

import { MainPage } from '../pages/main-page';

export const Router = () => {
  return (
    <Route exact path={['/']}>
      <MainPage />
    </Route>
  );
};
