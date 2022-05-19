import React from 'react';
import { Route } from 'react-router';

import { URL_PATHS } from 'common/constants/url-paths';

import { InquiriesPage } from './pages/inquiries-page';
import { InquiryFormPage } from './pages/inquiry-form-page';

export const inquiryServiceRoutes = [
  <Route
    key={`${URL_PATHS.INQUIRIES}`}
    path={`${URL_PATHS.INQUIRIES}`}
    element={<InquiriesPage />}
  />,
  <Route
    key={`${URL_PATHS.INQUIRIES}-form`}
    path={`${URL_PATHS.INQUIRIES}/:${URL_PATHS.ID}`}
    element={<InquiryFormPage />}
  />,
];
