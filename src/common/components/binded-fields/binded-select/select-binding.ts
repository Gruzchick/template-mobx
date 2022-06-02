import merge from 'lodash/merge';

import type { ISelectProps } from 'common/components/fields/select';
import type { BindingArguments } from 'common/types/form';

import type { IBindedSelectProps } from './binded-select';

export const selectBinding = ({
  field,
  props,
}: BindingArguments<Omit<IBindedSelectProps, 'name'>>) => {
  const typedProps: ISelectProps = {
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    formControlProps: {
      error: Boolean(field.error),
      disabled: field.disabled,
    },
    inputLabelProps: {
      id: `${field.id as string}-label`,
      children: field.label,
    },
    muiSelectProps: {
      id: field.id,
      labelId: `${field.id as string}-label`,
      name: field.name,
      label: field.label,
      value: field.value,
      onChange: field.onChange,
      onBlur: field.onBlur,
      onFocus: field.onFocus,
      autoFocus: field.autoFocus,
    },
    formHelperTextProps: {
      children: field.error,
    },
    loading: props.loading,
    selectOptions: props.selectOptions,
    /* eslint-enable @typescript-eslint/no-unsafe-assignment */
  };

  return merge(typedProps, props);
};

export type SelectBindingReturn = ReturnType<typeof selectBinding>;
