import { observer } from 'mobx-react';
import type { FC } from 'react';
import React, { useRef } from 'react';

import { Dialog as MuiDialog } from '@mui/material';

import type { BaseModalContentComponent, IDialogConfig } from 'common/components/diologs/types';

import { dialogsStore } from './dialogs-store';

interface IDialogProps extends IDialogConfig<BaseModalContentComponent> {
  container?: HTMLDivElement;
}

const Dialog: FC<IDialogProps> = observer(
  ({
    muiDialogProps,
    content: Content,
    open,
    contentProps,
    close,
    container,
    customClose,
    modalId,
  }) => {
    return (
      <MuiDialog
        container={container}
        open={open}
        onClose={(event, reason) => {
          if (customClose) {
            void customClose({ close, event, reason });
            return;
          }
          close();
        }}
        {...muiDialogProps}
      >
        <Content {...contentProps} close={close} customClose={customClose} modalId={modalId} />
      </MuiDialog>
    );
  },
);

Dialog.displayName = 'Dialog';

export const Dialogs: FC = observer(() => {
  const modalsContainerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {dialogsStore.modals.map((props) => {
        return (
          <Dialog
            key={props.modalId}
            {...props}
            container={modalsContainerRef.current ?? undefined}
          />
        );
      })}
      <div ref={modalsContainerRef} />
    </>
  );
});

Dialogs.displayName = 'Dialogs';
