import { observer } from 'mobx-react';
import type { FC } from 'react';
import React from 'react';

import type {
  FormControlProps,
  FormHelperTextProps,
  InputLabelProps,
  SelectProps,
} from '@mui/material';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from '@mui/material';

import * as S from './styled';

export interface ISelectProps {
  formControlProps?: FormControlProps;
  inputLabelProps: InputLabelProps;
  muiSelectProps: SelectProps;
  formHelperTextProps?: FormHelperTextProps;
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
  }) => {
    const isShowErrorIfExists = formControlProps?.disabled !== true && loading !== true;

    return (
      <FormControl
        fullWidth
        size={'small'}
        {...formControlProps}
        disabled={formControlProps?.disabled || loading}
        error={isShowErrorIfExists && formControlProps?.error}
      >
        {Boolean(inputLabelProps) && <InputLabel {...inputLabelProps} />}
        <MuiSelect {...muiSelectProps} MenuProps={{ disablePortal: true }}>
          {selectOptions.map((item) => (
            <MenuItem key={item.value + item.label} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </MuiSelect>
        {isShowErrorIfExists && Boolean(formHelperTextProps) && (
          <FormHelperText {...formHelperTextProps} />
        )}
        {loading && <S.Overlay />}
        {loading && <S.Loader size={24} />}
      </FormControl>
    );
  },
);

Select.displayName = 'Select';
