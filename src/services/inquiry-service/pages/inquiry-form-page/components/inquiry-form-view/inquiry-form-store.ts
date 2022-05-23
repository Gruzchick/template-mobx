import type { Field } from 'mobx-react-form';
import { Form } from 'mobx-react-form';
import * as yup from 'yup';

import { BINDING_NAMES, bindings } from 'common/components/binded-fields/bindings';
import { yupPluginAdapter } from 'common/utils/form/yup-plugin';

import { INQUIRY_FORM_FIELD_NAMES } from '../../store/constants';
import type { InquiryFormPageStore } from '../../store/inquiry-form-page-store';
import { inquiryFormSchema } from './inquiry-form-schema';

interface FormValues {
  agree: boolean;
  textField: string;
  organization: string;
  accounts: string;
  commissionAccounts: string;
  date: Date;
}

export class InquiryFormStore extends Form<FormValues> {
  pageStore: InquiryFormPageStore;
  appStore;
  serviceStore;

  name = 'inquiryForm';

  constructor(
    pageStore: InquiryFormPageStore,
    serviceStore?: Record<string, any>,
    appStore?: Record<string, any>,
  ) {
    super({}); // Passing an empty object because the first argument is required
    this.pageStore = pageStore;
    this.serviceStore = serviceStore;
    this.appStore = appStore;
  }

  options() {
    return {
      validateOnChange: true,
    };
  }

  plugins() {
    return {
      yup: yupPluginAdapter({
        package: yup,
        schema: inquiryFormSchema,
      }),
    };
  }

  setup() {
    return {
      fields: [
        {
          name: INQUIRY_FORM_FIELD_NAMES.AGREE,
          label: 'Согласие',
          bindings: BINDING_NAMES.CHECKBOX,
          value: false,
        },
        {
          name: INQUIRY_FORM_FIELD_NAMES.DATE,
          label: 'Дата',
          placeholder: 'Выберите дату',
          bindings: BINDING_NAMES.DATE_PICKER,
          value: '',
        },
        {
          name: INQUIRY_FORM_FIELD_NAMES.TEXT_FIELD,
          label: 'Счёт',
          placeholder: 'Выберите счёт',
          bindings: BINDING_NAMES.TEXT_FIELD,
          value: '',
        },
        {
          name: INQUIRY_FORM_FIELD_NAMES.ORGANIZATION,
          label: 'Организация',
          placeholder: 'Выберите организацию',
          bindings: BINDING_NAMES.SELECT_FIELD,
          required: 'required',
          value: '',
          hooks: {
            onChange(f: Field) {
              const form = f.state.form as InquiryFormStore;

              form.$(INQUIRY_FORM_FIELD_NAMES.ACCOUNTS).reset();

              if (f.value) {
                void form.pageStore.fetchAccounts(f.value as string);
              }
            },
          },
        },
        {
          name: INQUIRY_FORM_FIELD_NAMES.ACCOUNTS,
          label: 'Счёт',
          placeholder: 'Выберите счёт',
          bindings: BINDING_NAMES.SELECT_FIELD,
          value: '',
        },
        {
          name: INQUIRY_FORM_FIELD_NAMES.COMMISSION_ACCOUNTS,
          label: 'Счёт для списания комиссии',
          placeholder: 'Выберите счёт для списания комиссии',
          bindings: BINDING_NAMES.SELECT_FIELD,
          value: '',
        },
        {
          name: INQUIRY_FORM_FIELD_NAMES.COMMISSION_ACCOUNTS,
          label: 'Счёт для списания комиссии',
          placeholder: 'Выберите счёт для списания комиссии',
          bindings: BINDING_NAMES.SELECT_FIELD,
          value: '',
        },
      ],
    };
  }

  bindings() {
    return bindings;
  }
}
