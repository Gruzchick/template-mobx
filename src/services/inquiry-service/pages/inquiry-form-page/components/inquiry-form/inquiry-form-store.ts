import type { Field } from 'mobx-react-form';
import { Form } from 'mobx-react-form';
import * as yup from 'yup';

import { BINDING_NAMES, bindings } from 'common/components/binded-fields/bindings';
import { dialogsStore } from 'common/components/diologs/dialogs-store';
import { loaderStore } from 'common/components/global-loader/loader-store';
import { URL_PATHS } from 'common/constants/url-paths';
import { history } from 'common/router';
import { isErrorResponse } from 'common/types/api';
import { yupPluginAdapter } from 'common/utils/form/yup-plugin';

import { inquiryServiceApi } from 'inquiry-service/api/inquiry-service-api';

import type { PageStore } from '../../page-store';
import type { InquiryFormValues } from '../../types';
import { INQUIRY_FORM_FIELD_NAMES } from '../../types';
import { inquiryFormSchema } from './inquiry-form-schema';

export class InquiryFormStore extends Form<InquiryFormValues> {
  pageStore: PageStore;
  appStore;
  serviceStore;

  name = 'inquiryForm';

  constructor(
    pageStore: PageStore,
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
      validateOnInit: false,
      validateOnChange: true,
      showErrorsOnReset: false,
      showErrorsOnClear: false,
      validateDisabledFields: false,
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
          name: INQUIRY_FORM_FIELD_NAMES.ORGANIZATION,
          label: 'Организация',
          placeholder: 'Выберите организацию',
          bindings: BINDING_NAMES.SELECT_FIELD,
          required: 'required',
          hooks: {
            onChange: async (f: Field) => {
              const form = f.state.form as InquiryFormStore;

              form.$(INQUIRY_FORM_FIELD_NAMES.ACCOUNTS).reset();
              form.pageStore.accounts = [];

              loaderStore.showLoader();

              const resp = await inquiryServiceApi.checkOrganization(f.value as string);

              loaderStore.hideLoader();

              if (isErrorResponse(resp)) {
                await dialogsStore.showError(
                  resp.message ??
                    'В данный момент для данной организации нельзя заказать справку, попробуйте позже. Либо перезвоните по телефону тех. поддержки: +0-000-000-00-00',
                );

                f.reset();
                return;
              }

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
        },
        {
          name: INQUIRY_FORM_FIELD_NAMES.INQUIRIES,
          value: {},
        },
        {
          name: INQUIRY_FORM_FIELD_NAMES.COMMISSION_ACCOUNT,
          label: 'Счёт для списания комиссии',
          placeholder: 'Выберите счёт для списания комиссии',
          bindings: BINDING_NAMES.SELECT_FIELD,
        },
        {
          name: INQUIRY_FORM_FIELD_NAMES.NOTIFY_BY_EMAIL,
          label: 'Email',
          bindings: BINDING_NAMES.CHECKBOX,
          value: false,
          hooks: {
            onChange: (f: Field) => {
              const form = f.state.form as InquiryFormStore;

              if (!f.value) {
                form.$(INQUIRY_FORM_FIELD_NAMES.EMAIL).reset();
              }
            },
          },
        },
        {
          name: INQUIRY_FORM_FIELD_NAMES.EMAIL,
          label: 'Email',
          placeholder: 'Укажите email',
          bindings: BINDING_NAMES.TEXT_FIELD,
        },
      ],
    };
  }

  bindings() {
    return bindings;
  }

  hooks() {
    return {
      onSuccess: async (form: InquiryFormStore) => {
        const resp = await inquiryServiceApi.createInquiry(form.values());

        if (isErrorResponse(resp)) {
          void dialogsStore.showError(resp.message);

          return;
        }

        history.push(URL_PATHS.INQUIRIES);

        void dialogsStore.showSuccess('Заявка успешно отправлена!');
      },
      onError: () => {
        void dialogsStore.showError(
          'Не удалось отправить запрос. Обнаружены ошибки при заполнении формы. Исправьте ошибки и повторите запрос',
        );
      },
    };
  }
}
