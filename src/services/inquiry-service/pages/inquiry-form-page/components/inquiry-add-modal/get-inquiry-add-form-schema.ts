import type { TestContext } from 'yup';
import { mixed, object, string } from 'yup';

import { INQUIRY_TYPES } from 'inquiry-service/types/inquiry';

import { ERROR_MESSAGES } from '../../constants';
import type { InquiryAddFormValues } from '../../types';
import { INQUIRY_ADD_FORM_FIELD_NAMES } from '../../types';

export const testDateRequired = (value: '' | null, context: TestContext) => {
  if (!value) {
    return context.createError({ message: ERROR_MESSAGES.REQUIRED_FIELD });
  }
  return true;
};

export const testDateValid = (value: Date, context: TestContext) => {
  if (Number.isNaN(value.valueOf())) {
    return context.createError({ message: ERROR_MESSAGES.INVALID_DATE_FORMAT_FIELD });
  }
  return true;
};

export const testDateLessThanCurrentDate = (value: Date, context: TestContext) => {
  if (value >= new Date()) {
    return context.createError({ message: ERROR_MESSAGES.DATE_GREATER_THAN_NOW });
  }
  return true;
};

type ContextType = {
  values: InquiryAddFormValues;
};

export const getInquiryAddFormSchema = (inquiryType: INQUIRY_TYPES) => {
  const schema = {
    [INQUIRY_ADD_FORM_FIELD_NAMES.INQUIRY_TYPE]: string().required(),
  };

  switch (inquiryType) {
    case INQUIRY_TYPES.OPEN_ACCOUNT:
    case INQUIRY_TYPES.CASH_BALANCE:
    case INQUIRY_TYPES.FILE_CABINET:
      schema[INQUIRY_ADD_FORM_FIELD_NAMES.DATE] = mixed()
        .nullable()
        .test('', '', testDateRequired)
        .test('', '', testDateValid)
        .test('', '', testDateLessThanCurrentDate);
      break;
    case INQUIRY_TYPES.INFORMATION_CURRENCY:
      schema[INQUIRY_ADD_FORM_FIELD_NAMES.DATE_FROM] = mixed()
        .nullable()
        .test('', '', testDateRequired)
        .test('', '', testDateValid)
        .test('', '', testDateLessThanCurrentDate)
        .test('', '', (value: Date, testContext: TestContext<ContextType>) => {
          const { values } = testContext.options.context ?? {};

          if (
            values &&
            values.inquiryType === INQUIRY_TYPES.INFORMATION_CURRENCY &&
            values.dateTo &&
            value > values.dateTo
          ) {
            return testContext.createError({
              message: 'Значение должно быть больше значения "За период по"',
            });
          }

          return true;
        });
      schema[INQUIRY_ADD_FORM_FIELD_NAMES.DATE_TO] = mixed()
        .nullable()
        .test('', '', testDateRequired)
        .test('', '', testDateValid)
        .test('', '', testDateLessThanCurrentDate)
        .test('', '', (value: Date, testContext: TestContext<ContextType>) => {
          const { values } = testContext.options.context ?? {};

          if (
            values &&
            values.inquiryType === INQUIRY_TYPES.INFORMATION_CURRENCY &&
            values.dateFrom &&
            value < values.dateFrom
          ) {
            return testContext.createError({
              message: 'Значение должно быть меньше значения "За период с"',
            });
          }

          return true;
        });
  }

  return object(schema);
};
