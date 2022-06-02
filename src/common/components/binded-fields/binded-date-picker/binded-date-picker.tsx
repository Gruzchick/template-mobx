import ruLocale from 'date-fns/locale/ru';
import merge from 'lodash/merge';
import { observer } from 'mobx-react';
import type { FC } from 'react';
import React, { useContext, useRef } from 'react';

import type { TextFieldProps } from '@mui/material/TextField';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import type { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { FormContext } from 'common/components/form-provider';

import type { DatePickerBindingReturn } from './date-picker-binding';

export interface IBindedDatePickerProps {
  name: string;
  datePickerProps?: Omit<DatePickerProps<Date, Date>, 'renderInput' | 'onChange' | 'value'>;
  textFieldProps?: TextFieldProps;
}

export const BindedDatePicker: FC<IBindedDatePickerProps> = observer((props) => {
  const form = useContext(FormContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const { name, ...restProps } = props;

  const defaultProps: Omit<IBindedDatePickerProps, 'name'> = {
    textFieldProps: {
      placeholder: 'дд.мм.гггг',
      inputProps: {
        placeholder: 'дд.мм.гггг',
      },
    },
  };

  const { datePickerProps, textFieldProps } = {
    ...form.$(name).bind<DatePickerBindingReturn>(merge({}, defaultProps, restProps)),
  };

  return (
    <LocalizationProvider adapterLocale={ruLocale} dateAdapter={AdapterDateFns}>
      <DatePicker
        inputRef={inputRef}
        disableMaskedInput={false}
        mask={'__.__.____'}
        openTo={'day'}
        views={['year', 'month', 'day']}
        onAccept={() => {
          form.$(name).validate({ showErrors: true });
        }}
        {...datePickerProps}
        renderInput={(parameters) => {
          return (
            <TextField
              {...parameters}
              size={'small'}
              fullWidth
              {...merge({}, parameters, textFieldProps)}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
});

BindedDatePicker.displayName = 'BindedDatePicker';
