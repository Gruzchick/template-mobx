import { observer } from 'mobx-react';
import type { FC } from 'react';
import React, { useContext } from 'react';

import type { ICheckboxProps } from 'common/components/fields/checkbox/checkbox';
import { Checkbox } from 'common/components/fields/checkbox/checkbox';
import { FormContext } from 'common/components/form-provider/form-provider';

import type { CheckboxBindingReturn } from './checkbox-binding';

export interface IBindedCheckboxProps extends ICheckboxProps {
  name: string;
}

export const BindedCheckbox: FC<IBindedCheckboxProps> = observer(({ name, ...rest }) => {
  const form = useContext(FormContext);

  return <Checkbox {...form.$(name).bind<CheckboxBindingReturn>({ ...rest })} />;
});

BindedCheckbox.displayName = 'BindedCheckbox';
