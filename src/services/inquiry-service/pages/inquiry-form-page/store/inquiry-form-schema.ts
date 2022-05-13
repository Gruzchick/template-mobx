import { object, string } from 'yup';

import { INQUIRY_FORM_FIELD_NAMES } from './constants';

export const inquiryFormSchema = () => {
  return object({
    [INQUIRY_FORM_FIELD_NAMES.TEXT_FIELD]: string().max(3),
  });
};
