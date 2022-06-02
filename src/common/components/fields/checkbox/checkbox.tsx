import { observer } from 'mobx-react';
import type { FC } from 'react';
import React from 'react';

import type { CheckboxProps, FormControlLabelProps } from '@mui/material';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';

export interface ICheckboxProps {
  formControlLabelProps: Omit<FormControlLabelProps, 'control'>;
  checkbox?: CheckboxProps;
}

export const Checkbox: FC<ICheckboxProps> = observer(({ checkbox, formControlLabelProps }) => {
  return <FormControlLabel control={<MuiCheckbox {...checkbox} />} {...formControlLabelProps} />;
});

Checkbox.displayName = 'Checkbox';
