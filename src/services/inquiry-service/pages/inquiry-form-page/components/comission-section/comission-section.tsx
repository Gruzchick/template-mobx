import isEmpty from 'lodash/isEmpty';
import { observer } from 'mobx-react';
import type { FC } from 'react';
import React, { useContext, useEffect, useMemo } from 'react';

import { Alert, Grid, LinearProgress, Typography } from '@mui/material';

import type { INQUIRY_TYPES } from 'inquiry-service/types/inquiry';

import { InquiryPageContext } from '../../constants';
import { FormRowStyled, GrayTextStyled } from '../common-styled';

export const CommissionSection: FC = observer(() => {
  const { pageStore } = useContext(InquiryPageContext);

  const { form, commissionValueFetching, commissionValue } = pageStore;

  const { inquiries, account } = form.values();

  const isInquiriesSelected = !isEmpty(inquiries);

  const content = useMemo(() => {
    if (isEmpty(inquiries) || !account) {
      return (
        <Alert severity="info">Комиссия будет рассчитана после выбора счёта и видов справок</Alert>
      );
    } else if (commissionValueFetching) {
      return (
        <>
          <GrayTextStyled>Получение размера комиссии</GrayTextStyled>
          <LinearProgress />
        </>
      );
    } else {
      return (
        <Typography variant={'h6'}>{`Комиссия за выдачу справки: ${commissionValue} ₽`}</Typography>
      );
    }
  }, [account, commissionValue, commissionValueFetching, inquiries]);

  useEffect(() => {
    if (isInquiriesSelected && account) {
      void pageStore.fetchCommissionValue({
        inquiries: Object.keys(inquiries) as INQUIRY_TYPES[],
        accountId: account,
      });
    }
  }, [isInquiriesSelected, account, pageStore, inquiries]);

  return (
    <FormRowStyled container>
      <Grid item md={6}>
        {content}
      </Grid>
    </FormRowStyled>
  );
});

CommissionSection.displayName = 'CommissionSection';
