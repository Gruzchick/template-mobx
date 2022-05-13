import type { FieldPropsType } from 'mobx-react-form/lib/models/FieldProps';

export type $try = <T>(...values: T[]) => T;

export type BindingArguments<P extends Record<string, any>> = {
  $try: $try;
  field: FieldPropsType;
  props: P;
};
