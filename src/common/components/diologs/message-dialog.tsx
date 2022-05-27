import { observer } from 'mobx-react';
import type { FC } from 'react';
import React from 'react';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { DialogContent, DialogContentText, DialogTitle, IconButton, Stack } from '@mui/material';

import type { IContentProps } from './types';

export enum MESSAGE_DIALOGS_TYPES {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

const getHeaderText = (type: MESSAGE_DIALOGS_TYPES) => {
  let headerText: string;

  switch (type) {
    case MESSAGE_DIALOGS_TYPES.ERROR:
      headerText = 'Ошибка!';
      break;
    case MESSAGE_DIALOGS_TYPES.SUCCESS:
      headerText = 'Успех!';
      break;
    default:
      headerText = '';
      break;
  }

  return headerText;
};

const getMessage = (type: MESSAGE_DIALOGS_TYPES) => {
  let message: string;

  switch (type) {
    case MESSAGE_DIALOGS_TYPES.ERROR:
      message = 'Не удалось выполнить действие!';
      break;
    case MESSAGE_DIALOGS_TYPES.SUCCESS:
      message = 'Действие выполнено успешно!';
      break;
    default:
      message = '';
      break;
  }

  return message;
};

const getIcon = (type: MESSAGE_DIALOGS_TYPES) => {
  let element: React.ReactElement | undefined;

  switch (type) {
    case MESSAGE_DIALOGS_TYPES.ERROR:
      element = <ErrorOutlineIcon color={'error'} />;
      break;
    case MESSAGE_DIALOGS_TYPES.SUCCESS:
      element = <CheckCircleOutlineIcon color={'success'} />;
      break;
    default:
      element = undefined;
      break;
  }

  return element;
};

export interface IMessageDialogProps extends IContentProps<undefined> {
  type: MESSAGE_DIALOGS_TYPES;
  headerText?: string;
  message?: string;
}

export const MessageDialog: FC<IMessageDialogProps> = observer(
  ({ type, close, customClose, ...props }) => {
    const headerText = props.headerText ?? getHeaderText(type);
    const message = props.message ?? getMessage(type);
    const icon = getIcon(type);

    const handleClose = () => {
      if (customClose) {
        void customClose({ close });
        return;
      }
      close();
    };

    return (
      <>
        <DialogTitle>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            {headerText}
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <Stack direction="row" alignItems="top" spacing={1}>
            {icon}
            <DialogContentText>{message}</DialogContentText>
          </Stack>
        </DialogContent>
      </>
    );
  },
);

MessageDialog.displayName = 'MessageDialog';
