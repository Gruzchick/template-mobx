import React from 'react';

import type { IBreadcrumbsProps } from 'common/components/breadcrumbs/breadcrumbs';
import { URL_PATHS } from 'common/constants/url-paths';

import { INQUIRY_TYPES } from 'inquiry-service/types/inquiry';

import type { IInquiryPageContext } from './types';

export const BREADCRUMBS_CONFIG: IBreadcrumbsProps['breadcrumbsConfig'] = [
  {
    label: 'Справки',
    url: URL_PATHS.INQUIRIES,
  },
  {
    label: 'Запрос справки',
  },
];

export const InquiryPageContext = React.createContext(undefined as unknown as IInquiryPageContext);

export const INQUIRY_TYPE_NAME = {
  [INQUIRY_TYPES.OPEN_ACCOUNT]: 'О наличии открытых счетов в банке',
  [INQUIRY_TYPES.INFORMATION_CURRENCY]: 'Об оборотах денежных средств на счетах',
  [INQUIRY_TYPES.CASH_BALANCE]: 'Об остатках денежных средств на счетах',
  [INQUIRY_TYPES.FILE_CABINET]: 'О наличии картотеки',
  [INQUIRY_TYPES.ACCOUNT_RESTRICTION]: 'Об отсутствии/наличии арестов и ограничений по счетам',
};

export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'Поле обязательно для заполнения',
  INVALID_DATE_FORMAT_FIELD: 'Неправильный формат даты',
  DATE_GREATER_THAN_NOW: 'Значение даты не должно быть больше даты сегодняшнего дня',
};
