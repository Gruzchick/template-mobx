/* eslint-disable react/jsx-key */
import React from 'react';
import { Route } from 'react-router';

import { URL_PATHS } from 'common/constants/url-paths';

import { StatisticPage } from './pages/statistic-page';

export const statisticsServiceRoutes = [
  <Route
    key={`${URL_PATHS.STATISTIC}`}
    path={`${URL_PATHS.STATISTIC}`}
    element={<StatisticPage />}
  />,
];
