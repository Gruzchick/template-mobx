import Form from 'mobx-react-form';
import * as yup from 'yup';

import { BINDING_NAMES, bindings } from 'common/components/binded-fields/bindings';
import { yupPluginAdapter } from 'common/utils/form/yup-plugin';

import { INQUIRY_TYPES } from 'inquiry-service/types/inquiry';

import type { InquiryAddFormValues } from '../../types';
import { INQUIRY_ADD_FORM_FIELD_NAMES } from '../../types';
import { getInquiryAddFormSchema } from './get-inquiry-add-form-schema';

export class InquiryAddFormStore extends Form<InquiryAddFormValues> {}

export const getInquiryAddFormStore = (initVales: InquiryAddFormValues) => {
  const fields: any[] = [
    {
      name: INQUIRY_ADD_FORM_FIELD_NAMES.INQUIRY_TYPE,
      value: initVales.inquiryType,
    },
  ];

  switch (initVales.inquiryType) {
    case INQUIRY_TYPES.OPEN_ACCOUNT:
    case INQUIRY_TYPES.CASH_BALANCE:
    case INQUIRY_TYPES.FILE_CABINET:
      fields.push({
        name: INQUIRY_ADD_FORM_FIELD_NAMES.DATE,
        label: 'На дату',
        bindings: BINDING_NAMES.DATE_PICKER,
        value: initVales.date,
      });
      break;
    case INQUIRY_TYPES.INFORMATION_CURRENCY:
      fields.push(
        {
          name: INQUIRY_ADD_FORM_FIELD_NAMES.DATE_FROM,
          label: 'За период с',
          bindings: BINDING_NAMES.DATE_PICKER,
          value: initVales.dateFrom,
        },
        {
          name: INQUIRY_ADD_FORM_FIELD_NAMES.DATE_TO,
          label: 'За период по',
          bindings: BINDING_NAMES.DATE_PICKER,
          value: initVales.dateTo,
        },
      );
  }

  const plugins = {
    yup: yupPluginAdapter({
      package: yup,
      schema: () => getInquiryAddFormSchema(initVales.inquiryType),
    }),
  };

  const options = {
    validateOnInit: false,
  };

  return new InquiryAddFormStore({ fields }, { bindings, plugins, options });
};
