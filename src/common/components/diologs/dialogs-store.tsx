import uniqueId from 'lodash/uniqueId';
import type { IObservableArray } from 'mobx';
import { action, makeAutoObservable, observable } from 'mobx';

import type { IConfirmationDialogProps } from 'common/components/diologs/confirm-dialog';

import { ConfirmationDialog } from './confirm-dialog';
import type { IMessageDialogProps } from './message-dialog';
import { MESSAGE_DIALOGS_TYPES, MessageDialog } from './message-dialog';
import type {
  BaseModalContentComponent,
  GetCloseReturnTypeFromComponent,
  GetContentProps,
  IDialogConfig,
  IShowDialogArgs,
} from './types';

export class DialogsStore {
  modals: IObservableArray<IDialogConfig<BaseModalContentComponent>> = observable<
    IDialogConfig<BaseModalContentComponent>
  >([], {
    deep: false,
  });

  constructor() {
    makeAutoObservable(this, {
      showDialog: action,
      closeModal: action,
      showError: action,
      showConfirm: action,
      showSuccess: action,
    });
  }

  showDialog<C extends BaseModalContentComponent>({
    content,
    muiDialogProps,
    modalId,
    customClose,
    contentProps,
  }: IShowDialogArgs<C>) {
    const resultingModalId = modalId ?? uniqueId();

    return new Promise<GetCloseReturnTypeFromComponent<C> | undefined>((resolve) => {
      this.modals.push({
        modalId: resultingModalId,
        muiDialogProps,
        contentProps,
        content,
        open: true,
        close: (arg?: GetCloseReturnTypeFromComponent<C>) => {
          this.closeModal(resultingModalId);
          resolve(arg);
        },
        customClose,
      });
    });
  }

  closeModal(modalId: string) {
    const modalToClose = this.modals.find((item) => item.modalId === modalId);

    if (modalToClose) {
      this.modals.remove(modalToClose);
    }
  }

  private showMessage(contentProps?: GetContentProps<IMessageDialogProps>) {
    return this.showDialog({
      content: MessageDialog,
      muiDialogProps: {
        fullWidth: true,
      },
      contentProps,
    });
  }

  showError(
    message?: string,
    contentProps?: Omit<GetContentProps<IMessageDialogProps>, 'type' | 'message'>,
  ) {
    return this.showMessage({ type: MESSAGE_DIALOGS_TYPES.ERROR, message, ...contentProps });
  }

  showSuccess(
    message?: string,
    contentProps?: Omit<GetContentProps<IMessageDialogProps>, 'type' | 'message'>,
  ) {
    return this.showMessage({ type: MESSAGE_DIALOGS_TYPES.SUCCESS, message, ...contentProps });
  }

  showConfirm(
    message?: string,
    contentProps?: Omit<GetContentProps<IConfirmationDialogProps>, 'message'>,
  ) {
    return this.showDialog({
      content: ConfirmationDialog,
      muiDialogProps: {
        fullWidth: true,
      },
      contentProps: {
        message,
        ...contentProps,
      },
    });
  }
}

export const dialogsStore = new DialogsStore();
