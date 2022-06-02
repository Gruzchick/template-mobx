import { observer } from 'mobx-react';
import type { FC } from 'react';
import React, { useContext, useMemo } from 'react';

import { Button, Grid, Stack } from '@mui/material';

import { BindedCheckbox } from 'common/components/binded-fields/binded-checkbox';
import { BindedSelect } from 'common/components/binded-fields/binded-select';
import { BindedTextField } from 'common/components/binded-fields/binded-text-field';
import { FormProvider } from 'common/components/form-provider/form-provider';

import { InquiryPageContext } from '../../constants';
import { INQUIRY_FORM_FIELD_NAMES } from '../../types';
import { CommissionSection } from '../comission-section/comission-section';
import { FormRowStyled, GrayTextStyled } from '../common-styled';
import { InquiryAddSection } from '../inquiry-add-section/inquiry-add-section';

import * as S from './styled';

export const InquiryForm: FC = observer(() => {
  const {
    pageStore: { form, organizations, accounts, accountsFetching, commissionAccounts },
  } = useContext(InquiryPageContext);

  const commissionAccountOptions = useMemo(() => {
    return commissionAccounts.map((item) => ({ value: item.id, label: item.accountNumber }));
  }, [commissionAccounts]);

  const organizationOptions = useMemo(() => {
    return organizations.map((item) => ({ value: item.id, label: item.name }));
  }, [organizations]);

  const accountOptions = useMemo(() => {
    return accounts.map((item) => ({ value: item.id, label: item.accountNumber }));
  }, [accounts]);

  const handleClearButton = () => {
    form.clear();
    form.$(INQUIRY_FORM_FIELD_NAMES.INQUIRIES).set('value', {});
  };

  const handleSubmit = () => {
    form.submit();
  };

  return (
    <FormProvider form={form}>
      <S.Wrapper>
        <FormRowStyled container>
          <Grid item md={6}>
            <BindedSelect
              name={INQUIRY_FORM_FIELD_NAMES.ORGANIZATION}
              formControlProps={{
                required: true,
              }}
              selectOptions={organizationOptions}
            />
          </Grid>
        </FormRowStyled>
        <FormRowStyled container>
          <Grid item md={6}>
            <BindedSelect
              name={INQUIRY_FORM_FIELD_NAMES.ACCOUNTS}
              formControlProps={{
                disabled: !form.values().organization,
                required: true,
              }}
              loading={accountsFetching}
              selectOptions={accountOptions}
            />
          </Grid>
        </FormRowStyled>
        <InquiryAddSection />
        <CommissionSection />
        <FormRowStyled container>
          <Grid item md={6}>
            <BindedSelect
              formControlProps={{
                required: true,
              }}
              selectOptions={commissionAccountOptions}
              name={INQUIRY_FORM_FIELD_NAMES.COMMISSION_ACCOUNT}
            />
          </Grid>
        </FormRowStyled>
        <GrayTextStyled variant={'body2'}>Оповестить о готовности справки через:</GrayTextStyled>
        <FormRowStyled container>
          <Grid item md={6}>
            <BindedCheckbox name={INQUIRY_FORM_FIELD_NAMES.NOTIFY_BY_EMAIL} />
            {form.values().notifyByEmail && (
              <BindedTextField name={INQUIRY_FORM_FIELD_NAMES.EMAIL} />
            )}
          </Grid>
          <Grid item md={6} />
        </FormRowStyled>
        <FormRowStyled container>
          <Stack direction={'row'} spacing={1}>
            <Button variant={'contained'} onClick={handleSubmit}>
              Запросить справку
            </Button>
            {form.isDirty && (
              <Button variant={'text'} onClick={handleClearButton}>
                Очистить
              </Button>
            )}
          </Stack>
        </FormRowStyled>
      </S.Wrapper>
    </FormProvider>
  );
});

InquiryForm.displayName = 'InquiryForm';
