import { observer } from 'mobx-react';
import type { FC } from 'react';
import React, { useMemo } from 'react';

import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

import { BindedSelect } from 'common/components/binded-fields/select';
import { BindedTextField } from 'common/components/binded-fields/text-field';

import { INQUIRY_FORM_FIELD_NAMES } from '../../store/constants';
import type { InquiryFormPageStore } from '../../store/inquiry-form-page-store';

import * as S from './styled';

export interface InquiryFormViewProps {
  pageStore: InquiryFormPageStore;
}

export const InquiryFormView: FC<InquiryFormViewProps> = observer(({ pageStore }) => {
  const { form: form, organizations, accounts, accountsFetching, commissionAccounts } = pageStore;

  const commissionAccountOptions = useMemo(() => {
    return commissionAccounts.map((item) => ({ value: item.id, label: item.accountNumber }));
  }, [commissionAccounts]);

  const organizationOptions = useMemo(() => {
    return organizations.map((item) => ({ value: item.id, label: item.name }));
  }, [organizations]);

  const accountOptions = useMemo(() => {
    return accounts.map((item) => ({ value: item.id, label: item.accountNumber }));
  }, [accounts]);

  return (
    <>
      <S.Wrapper>
        <S.FormRow container>
          <Grid item md={6}>
            <BindedTextField name={INQUIRY_FORM_FIELD_NAMES.TEXT_FIELD} />
          </Grid>
        </S.FormRow>
        <S.FormRow container>
          <Grid item md={6}>
            <BindedSelect
              name={INQUIRY_FORM_FIELD_NAMES.ORGANIZATION}
              selectOptions={organizationOptions}
            />
          </Grid>
        </S.FormRow>
        <S.FormRow container>
          <Grid item md={6}>
            <BindedSelect
              name={INQUIRY_FORM_FIELD_NAMES.ACCOUNTS}
              formControlProps={{
                disabled: form.values().organization === '',
                required: true,
              }}
              loading={accountsFetching}
              selectOptions={accountOptions}
            />
          </Grid>
        </S.FormRow>
        <S.FormRow container>
          <Grid item md={6}>
            <BindedSelect
              selectOptions={commissionAccountOptions}
              name={INQUIRY_FORM_FIELD_NAMES.COMMISSION_ACCOUNTS}
            />
          </Grid>
        </S.FormRow>
        <S.FormRow container>
          <Grid item md={6}>
            <Button variant={'contained'}>Запросить справку</Button>
          </Grid>
        </S.FormRow>
      </S.Wrapper>
    </>
  );
});

InquiryFormView.displayName = 'InquiryFormView';
