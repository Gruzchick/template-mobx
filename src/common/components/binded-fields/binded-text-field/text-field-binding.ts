import merge from 'lodash/merge';

import type { TextFieldProps } from '@mui/material/TextField/TextField';

import type { BindingArguments } from 'common/types/form';

export const textFieldBinding = ({ field, props }: BindingArguments<TextFieldProps>) => {
  const typedProps: TextFieldProps = {
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    id: field.id,
    name: field.name as string,
    type: field.type,
    value: field.value,
    label: field.label,
    helperText: field.error,
    placeholder: field.placeholder,
    disabled: field.disabled,
    error: Boolean(field.error),
    onChange: field.onChange,
    onBlur: field.onBlur,
    onFocus: field.onFocus,
    autoFocus: field.autoFocus,
    /* eslint-enable @typescript-eslint/no-unsafe-assignment */
  };

  return merge(typedProps, props);
};

export type TextFieldBindingReturn = ReturnType<typeof textFieldBinding>;
