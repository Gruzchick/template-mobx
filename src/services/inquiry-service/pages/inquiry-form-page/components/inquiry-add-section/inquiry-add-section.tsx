import { format } from 'date-fns';
import { observer } from 'mobx-react';
import type { FC } from 'react';
import React, { useContext } from 'react';

import { Alert, Grid, Typography } from '@mui/material';

import { INQUIRY_TYPES } from 'inquiry-service/types/inquiry';

import { INQUIRY_TYPE_NAME, InquiryPageContext } from '../../constants';
import type { InquiryFormValues } from '../../types';
import { INQUIRY_FORM_FIELD_NAMES } from '../../types';
import { FormRowStyled, GrayTextStyled } from '../common-styled';
import { ShowInquiryAddModal } from '../inquiry-add-modal/inquiry-add-form';

import * as S from './styled';

const getHelperText = (
  values: Exclude<InquiryFormValues['inquiries'][INQUIRY_TYPES], undefined>,
) => {
  switch (values.inquiryType) {
    case INQUIRY_TYPES.OPEN_ACCOUNT:
    case INQUIRY_TYPES.CASH_BALANCE:
    case INQUIRY_TYPES.FILE_CABINET:
      return `на дату ${format(values.date, 'dd.MM.RRR')}`;
    case INQUIRY_TYPES.INFORMATION_CURRENCY:
      return `за период с ${format(values.dateFrom, 'dd.MM.RRRR')} по ${format(
        values.dateTo,
        'dd.MM.RRRR',
      )}`;
    case INQUIRY_TYPES.ACCOUNT_RESTRICTION:
      return 'информация будет предоставлена на дату выдачи справки';
  }
};

export interface IInquiryAddButtonProps {
  inquiryType: INQUIRY_TYPES;
}

const InquiryAddButton: FC<IInquiryAddButtonProps> = observer(({ inquiryType }) => {
  const {
    pageStore: { form },
  } = useContext(InquiryPageContext);

  const inquiryTypeValues = form.values().inquiries[inquiryType];

  const handleClick = async () => {
    const { onFocus, onBlur } = form.$(INQUIRY_FORM_FIELD_NAMES.INQUIRIES);

    onFocus();

    try {
      await ShowInquiryAddModal(inquiryType, form);
    } finally {
      onBlur();
    }
  };

  return (
    <Grid item md={6}>
      <S.Wrapper onClick={handleClick} direction={'row'} alignItems={'center'} spacing={1}>
        <S.IconWrapper>
          <S.AddIcon color={'primary'} />
          {inquiryTypeValues && <S.FilledMark />}
        </S.IconWrapper>
        <div>
          <Typography variant={'subtitle1'}>{INQUIRY_TYPE_NAME[inquiryType]}</Typography>
          {inquiryTypeValues && (
            <GrayTextStyled variant={'body2'}>{getHelperText(inquiryTypeValues)}</GrayTextStyled>
          )}
        </div>
      </S.Wrapper>
    </Grid>
  );
});

InquiryAddButton.displayName = 'InquiryAddButton';

export const InquiryAddSection: FC = observer(() => {
  const {
    pageStore: { form },
  } = useContext(InquiryPageContext);

  const inquiriesField = form.$(INQUIRY_FORM_FIELD_NAMES.INQUIRIES);

  return (
    <>
      <Grid container>
        <Grid item md={6}>
          {inquiriesField.error && <Alert severity="error">{inquiriesField.error}</Alert>}
        </Grid>
      </Grid>
      <FormRowStyled container>
        {Object.values(INQUIRY_TYPES).map((item) => (
          <InquiryAddButton key={item} inquiryType={item} />
        ))}
      </FormRowStyled>
    </>
  );
});

InquiryAddSection.displayName = 'InquiryAddSection';
