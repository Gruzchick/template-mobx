import merge from 'lodash/merge';

import type { ICheckboxProps } from 'common/components/fields/checkbox/checkbox';
import type { BindingArguments } from 'common/types/form';

export interface CheckboxExtraFieldProps {
  indeterminate?: boolean;
}

export const checkboxBinding = ({ field, props }: BindingArguments<ICheckboxProps>) => {
  const typedProps: ICheckboxProps = {
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    checkbox: {
      id: field.id,
      indeterminate: (field.extra as CheckboxExtraFieldProps)?.indeterminate,
    },
    formControlLabelProps: {
      checked: Boolean(field.value),
      label: field.label,
      onChange: field.onChange,
      disabled: field.disabled,
    },

    // TODO: Добавлять свойства в результат по необходимости
    // name: field.name,
    // type: field.type,
    // value: field.value,

    // helperText: field.error,
    // placeholder: field.placeholder,
    //
    // error: field.hasError,
    // onChange: field.onChange,
    // onBlur: field.onBlur,
    // onFocus: field.onFocus,
    // autoFocus: field.autoFocus,

    /* eslint-enable @typescript-eslint/no-unsafe-assignment */
  };

  return merge(typedProps, props);
};

export type CheckboxBindingReturn = ReturnType<typeof checkboxBinding>;
