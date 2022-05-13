import MobxReactFormDevTools from 'mobx-react-form-devtools';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';

import { AppLayout } from 'common/components/app-layout';
import { FormProvider } from 'common/components/form-provider';

import { InquiryFormView } from './components/inquiry-form-view';
import { InquiryFormPageStore } from './store/inquiry-form-page-store';

const pageStore = new InquiryFormPageStore();

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
MobxReactFormDevTools.register({
  [pageStore.form.name]: pageStore.form,
});

export const InquiryFormPage = observer(() => {
  const { organizationsFetching, commissionAccountsFetching } = pageStore;

  const { form } = pageStore;

  useEffect(() => {
    void pageStore.init();
  }, []);

  const isLoading = organizationsFetching || commissionAccountsFetching;

  return (
    <AppLayout loading={isLoading}>
      <FormProvider form={form}>
        <InquiryFormView pageStore={pageStore} />
      </FormProvider>
      <MobxReactFormDevTools.UI />
    </AppLayout>
  );
});

InquiryFormPage.displayName = 'InquiryFormPage';
