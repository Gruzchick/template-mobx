import ruLocale from 'date-fns/locale/ru';
import merge from 'lodash/merge';
import { observer } from 'mobx-react';
import type { FC } from 'react';
import React, { useContext } from 'react';

import type { TextFieldProps } from '@mui/material/TextField';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import type { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { FormContext } from 'common/components/form-provider/form-provider';

import type { DatePickerBindingReturn } from './date-picker-binding';

export interface IBindedDatePickerProps {
  name: string;
  datePickerProps?: Omit<DatePickerProps<Date, Date>, 'renderInput' | 'onChange' | 'value'>;
  textFieldProps?: TextFieldProps;
}

export const BindedDatePicker: FC<IBindedDatePickerProps> = observer((props) => {
  const form = useContext(FormContext);

  const { name, ...restProps } = props;

  const { datePickerProps, textFieldProps } = {
    ...form.$(name).bind<DatePickerBindingReturn>(restProps),
  };

  return (
    <LocalizationProvider adapterLocale={ruLocale} dateAdapter={AdapterDateFns}>
      <DatePicker
        disableMaskedInput={false}
        mask={'__.__.____'}
        openTo={'day'}
        views={['year', 'month', 'day']}
        {...datePickerProps}
        renderInput={(parameters) => {
          return (
            <TextField
              {...parameters}
              size={'small'}
              fullWidth
              {...merge(parameters, textFieldProps)}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
});

BindedDatePicker.displayName = 'BindedDatePicker';
