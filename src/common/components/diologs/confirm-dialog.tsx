import { observer } from 'mobx-react';
import type { FC } from 'react';
import React from 'react';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
} from '@mui/material';

import type { IContentProps } from './types';

export interface IConfirmationDialogProps extends IContentProps<boolean> {
  message?: string;
}

export const ConfirmationDialog: FC<IConfirmationDialogProps> = observer(
  ({ message = 'Выполнить действие?', close }) => {
    return (
      <>
        <DialogTitle>
          <Stack direction="row" alignItems="center" justifyContent="right">
            <IconButton onClick={() => close()}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => close(true)} variant={'contained'}>
            Да
          </Button>
          <Button onClick={() => close(false)} autoFocus>
            Нет
          </Button>
        </DialogActions>
      </>
    );
  },
);

ConfirmationDialog.displayName = 'ConfirmationDialog';
