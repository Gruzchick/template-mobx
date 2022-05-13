import { observer } from 'mobx-react';
import type { FC } from 'react';
import React, { useContext } from 'react';

import type { ISelectProps } from 'common/components/fields/select';
import { Select } from 'common/components/fields/select';
import { FormContext } from 'common/components/form-provider/form-provider';

import type { SelectBindingReturn } from './select-binding';

export interface IBindedSelectProps extends Partial<ISelectProps> {
  selectOptions: ISelectProps['selectOptions'];
  name: string;
}

export const BindedSelect: FC<IBindedSelectProps> = observer(({ name, ...rest }) => {
  const form = useContext(FormContext);

  return <Select {...form.$(name).bind<SelectBindingReturn>({ ...rest })} />;
});

Select.displayName = 'Select';
