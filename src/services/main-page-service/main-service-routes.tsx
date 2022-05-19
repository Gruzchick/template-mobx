/* eslint-disable react/jsx-key */
import React from 'react';
import { Route } from 'react-router';

import { URL_PATHS } from 'common/constants/url-paths';

import { MainPage } from './pages/main-page';

export const mainServiceRoutes = [
  <Route key={`${URL_PATHS.MAIN}`} path={`${URL_PATHS.MAIN}`} element={<MainPage />} />,
];
