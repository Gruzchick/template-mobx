import isEmpty from 'lodash/isEmpty';
import { boolean, mixed, object, string } from 'yup';

import { ERROR_MESSAGES } from '../../constants';
import type { InquiryFormValues } from '../../types';
import { INQUIRY_FORM_FIELD_NAMES } from '../../types';

export const inquiryFormSchema = () => {
  return object({
    [INQUIRY_FORM_FIELD_NAMES.ORGANIZATION]: string().required(ERROR_MESSAGES.REQUIRED_FIELD),
    [INQUIRY_FORM_FIELD_NAMES.ACCOUNTS]: string().required(ERROR_MESSAGES.REQUIRED_FIELD),
    [INQUIRY_FORM_FIELD_NAMES.INQUIRIES]: mixed().test(
      '',
      '',
      (value: InquiryFormValues['inquiries'], testContext) => {
        if (isEmpty(value)) {
          return testContext.createError({ message: 'Выберите хотя бы один тип справки' });
        }
        return true;
      },
    ),
    [INQUIRY_FORM_FIELD_NAMES.COMMISSION_ACCOUNT]: string().required(ERROR_MESSAGES.REQUIRED_FIELD),
    [INQUIRY_FORM_FIELD_NAMES.NOTIFY_BY_EMAIL]: boolean().required(ERROR_MESSAGES.REQUIRED_FIELD),
    [INQUIRY_FORM_FIELD_NAMES.EMAIL]: string().when('$values.notifyByEmail', {
      is: Boolean,
      // eslint-disable-next-line unicorn/no-thenable
      then: string()
        .required(
          'При выборе оповещения по электронной почте, обязательно указать адрес электронной почты',
        )
        .email('Неверный формат электронной почты'),
    }),
  });
};
