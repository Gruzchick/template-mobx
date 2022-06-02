import merge from 'lodash/merge';
import omit from 'lodash/omit';
import { observer } from 'mobx-react';
import type { FC } from 'react';
import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  DialogActions,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
} from '@mui/material';

import { BindedDatePicker } from 'common/components/binded-fields/binded-date-picker';
import type { IContentProps } from 'common/components/diologs';
import { dialogsStore } from 'common/components/diologs';
import { FormProvider } from 'common/components/form-provider';

import { INQUIRY_TYPES } from 'inquiry-service/types/inquiry';

import { INQUIRY_TYPE_NAME } from '../../constants';
import { INQUIRY_ADD_FORM_FIELD_NAMES, INQUIRY_FORM_FIELD_NAMES } from '../../types';
import type { InquiryFormStore } from '../inquiry-form/inquiry-form-store';
import type { InquiryAddFormStore } from './get-inquiry-add-form-store';
import { getInquiryAddFormStore } from './get-inquiry-add-form-store';

import * as S from './styled';

export interface IInquiryAddFormProps extends IContentProps<undefined> {
  addForm: InquiryAddFormStore;
  form: InquiryFormStore;
}

export const InquiryAddForm: FC<IInquiryAddFormProps> = observer(
  ({ addForm, close, customClose, form }) => {
    const inquiryType = addForm.values().inquiryType;

    const isInEditMode = form.values().inquiries[inquiryType];

    const isAddButtonHidden = inquiryType === INQUIRY_TYPES.ACCOUNT_RESTRICTION && isInEditMode;

    const handleAddButton = async () => {
      if ((await addForm.validate({ showErrors: true })) && addForm.isValid) {
        const field = form.$(INQUIRY_FORM_FIELD_NAMES.INQUIRIES);

        field.onChange(merge({}, field.value, { [inquiryType]: addForm.values() }));

        close();
      }
    };

    const handleDeleteButton = () => {
      const field = form.$(INQUIRY_FORM_FIELD_NAMES.INQUIRIES);

      field.onChange(merge({}, omit(field.value, inquiryType)));

      close();
    };

    return (
      <>
        <DialogTitle>
          <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
            {INQUIRY_TYPE_NAME[inquiryType]}
            <IconButton onClick={() => customClose?.({ close })}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <S.DialogContent>
          <FormProvider form={addForm}>
            {[
              INQUIRY_TYPES.OPEN_ACCOUNT,
              INQUIRY_TYPES.CASH_BALANCE,
              INQUIRY_TYPES.FILE_CABINET,
            ].includes(inquiryType) && (
              <BindedDatePicker
                name={INQUIRY_ADD_FORM_FIELD_NAMES.DATE}
                datePickerProps={{ PopperProps: { disablePortal: true } }}
              />
            )}

            {inquiryType === INQUIRY_TYPES.INFORMATION_CURRENCY && (
              <Stack direction={'row'} alignContent={'center'} spacing={1}>
                <BindedDatePicker
                  name={INQUIRY_ADD_FORM_FIELD_NAMES.DATE_FROM}
                  datePickerProps={{ PopperProps: { disablePortal: true } }}
                />
                <BindedDatePicker
                  name={INQUIRY_ADD_FORM_FIELD_NAMES.DATE_TO}
                  datePickerProps={{ PopperProps: { disablePortal: true } }}
                />
              </Stack>
            )}

            {inquiryType === INQUIRY_TYPES.ACCOUNT_RESTRICTION && (
              <DialogContentText>
                информация будет предоставлена на дату выдачи справки
              </DialogContentText>
            )}
          </FormProvider>
        </S.DialogContent>
        <DialogActions>
          {!isAddButtonHidden && (
            <Button onClick={handleAddButton} variant={'contained'}>
              {isInEditMode ? 'Сохранить' : 'Добавить'}
            </Button>
          )}
          {isInEditMode && <Button onClick={handleDeleteButton}>Удалить</Button>}
        </DialogActions>
      </>
    );
  },
);

InquiryAddForm.displayName = 'InquiryAddForm';

// eslint-disable-next-line mobx/missing-observer
export const ShowInquiryAddModal = function (inquiryType: INQUIRY_TYPES, form: InquiryFormStore) {
  const addForm = getInquiryAddFormStore({
    inquiryType,
    ...form.values().inquiries[inquiryType],
  });

  return dialogsStore.showDialog({
    content: InquiryAddForm,
    contentProps: {
      addForm,
      form,
    },
    muiDialogProps: {
      fullWidth: true,
      PaperComponent: S.Paper,
    },
    customClose: async ({ close }) => {
      if (addForm.isDirty) {
        if (
          (await dialogsStore.showConfirm(
            'На форме остались несохранённые изменения. Закрыть форму?',
          )) === true
        ) {
          close();
        }
      } else {
        close();
      }
    },
  });
};
