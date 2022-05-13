import { observer } from 'mobx-react';
import type { FC } from 'react';
import React from 'react';

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from '@mui/material';

import * as S from './styled';

export interface ISelectProps {
  formControlProps?: React.ComponentPropsWithRef<typeof FormControl>;
  inputLabelProps: React.ComponentPropsWithRef<typeof InputLabel>;
  muiSelectProps: React.ComponentPropsWithRef<typeof MuiSelect>;
  formHelperTextProps?: React.ComponentPropsWithRef<typeof FormHelperText>;
  selectOptions: Array<{ label: string; value: string }>;
  loading?: boolean;
}

export const Select: FC<ISelectProps> = observer(
  ({
    formControlProps,
    inputLabelProps,
    muiSelectProps,
    formHelperTextProps,
    selectOptions = [],
    loading,
  }) => (
    <FormControl
      fullWidth
      size={'small'}
      {...formControlProps}
      disabled={formControlProps.disabled || loading}
    >
      {Boolean(inputLabelProps) && <InputLabel {...inputLabelProps} />}
      <MuiSelect {...muiSelectProps}>
        {selectOptions.map((item) => (
          <MenuItem key={item.value + item.label} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {Boolean(formHelperTextProps) && <FormHelperText {...formHelperTextProps} />}
      {loading && <S.Overlay />}
      {loading && <S.Loader size={24} />}
    </FormControl>
  ),
);

Select.displayName = 'Select';
