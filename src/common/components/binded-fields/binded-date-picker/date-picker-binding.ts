import merge from 'lodash/merge';

import type { TextFieldProps } from '@mui/material';
import type { DatePickerProps } from '@mui/x-date-pickers/DatePicker';

import type { BindingArguments } from 'common/types/form';

import type { IBindedDatePickerProps } from './binded-date-picker';

type HelperReturnType = {
  datePickerProps: Omit<DatePickerProps<Date, Date>, 'renderInput'>;
  textFieldProps: TextFieldProps;
};

export const datePickerBinding = ({
  field,
  props,
}: BindingArguments<Omit<IBindedDatePickerProps, 'name'>>) => {
  const typedProps: HelperReturnType = {
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    datePickerProps: {
      value: field.value,
      onChange: field.onChange,
      disabled: field.disabled,
    },
    textFieldProps: {
      error: Boolean(field.error),
      label: field.label,
      helperText: field.error,
      placeholder: field.placeholder,
      onFocus: field.onFocus,
      onBlur: field.onBlur,
      inputProps: {
        placeholder: field.placeholder,
      },
    },

    // TODO: Добавлять свойства в результат по необходимости
    // id: field.id,
    // name: field.name,
    // type: field.type,
    // label: field.label,
    //
    //
    // autoFocus: field.autoFocus,
    /* eslint-enable @typescript-eslint/no-unsafe-assignment */
  };

  return merge(typedProps, props);
};

export type DatePickerBindingReturn = ReturnType<typeof datePickerBinding>;
