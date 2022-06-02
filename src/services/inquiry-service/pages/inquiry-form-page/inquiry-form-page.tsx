import { observer } from 'mobx-react-lite';
import React, { useEffect, useMemo, useState } from 'react';

import { AppLayoutContent } from 'common/components/app-layout';
import { useLoader } from 'common/components/global-loader/use-loader';
import { TopLine } from 'common/components/top-line/top-line';

import { InquiryForm } from './components/inquiry-form';
import { BREADCRUMBS_CONFIG, InquiryPageContext } from './constants';
import { PageStore } from './page-store';

export const InquiryFormPage = observer(() => {
  const [pageStore] = useState<PageStore>(() => new PageStore());

  const { organizationsFetching, commissionAccountsFetching } = pageStore;

  const { form } = pageStore;

  useEffect(() => {
    void pageStore.init();
  }, [form, pageStore]);

  useLoader(organizationsFetching || commissionAccountsFetching || form.submitting);

  const pageContextValue = useMemo(
    () => ({
      pageStore,
    }),
    [pageStore],
  );

  return (
    <AppLayoutContent>
      <TopLine breadcrumbsConfig={BREADCRUMBS_CONFIG} />
      <InquiryPageContext.Provider value={pageContextValue}>
        <InquiryForm />
      </InquiryPageContext.Provider>
    </AppLayoutContent>
  );
});

InquiryFormPage.displayName = 'InquiryFormPage';
