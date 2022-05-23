import { observer } from 'mobx-react';
import type { FC } from 'react';
import React, { useContext } from 'react';

import type { TextFieldProps } from '@mui/material/TextField';
import TextField from '@mui/material/TextField';

import { FormContext } from 'common/components/form-provider/form-provider';

import type { TextFieldBindingReturn } from './text-field-binding';

export const BindedTextField: FC<TextFieldProps> = observer((props) => {
  const form = useContext(FormContext);

  return (
    <TextField
      size={'small'}
      fullWidth
      {...form.$(props.name).bind<TextFieldBindingReturn>(props)}
    />
  );
});

BindedTextField.displayName = 'BindedTextField';
