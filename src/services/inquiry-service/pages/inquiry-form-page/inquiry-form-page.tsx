import MobxReactFormDevTools from 'mobx-react-form-devtools';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';

import { AppLayoutContent } from 'common/components/app-layout';
import { FormProvider } from 'common/components/form-provider';
import { useGlobalLoader } from 'common/components/global-loader/use-global-loader';
import { TopLine } from 'common/components/top-line/top-line';

import { InquiryFormView } from './components/inquiry-form-view';
import { BREADCRUMBS_CONFIG } from './constants';
import { InquiryFormPageStore } from './store/inquiry-form-page-store';

export const InquiryFormPage = observer(() => {
  const [pageStore] = useState<InquiryFormPageStore>(() => new InquiryFormPageStore());

  const { organizationsFetching, commissionAccountsFetching } = pageStore;

  const { form } = pageStore;

  useEffect(() => {
    void pageStore.init();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    MobxReactFormDevTools.register({
      [form.name]: form,
    });
  }, [form, pageStore]);

  useGlobalLoader(organizationsFetching || commissionAccountsFetching);

  return (
    <>
      <AppLayoutContent>
        <TopLine breadcrumbsConfig={BREADCRUMBS_CONFIG} />
        <FormProvider form={form}>
          <InquiryFormView pageStore={pageStore} />
        </FormProvider>
      </AppLayoutContent>
      <MobxReactFormDevTools.UI />
    </>
  );
});

InquiryFormPage.displayName = 'InquiryFormPage';
