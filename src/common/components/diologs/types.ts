import type React from 'react';

import type { DialogProps } from '@mui/material';

export interface ICustomCloseArgs<R> {
  event?: Record<string, any>;
  reason?: 'backdropClick' | 'escapeKeyDown';
  close(arg?: R): void;
}

export interface IContentProps<R> {
  modalId: string;
  close(arg?: R): void;
  customClose?(args: ICustomCloseArgs<R>): void | Promise<void>;
}

export type BaseModalContentComponent = React.ComponentType<IContentProps<any>>;

export type GetCloseReturnType<P extends IContentProps<any>> = Parameters<P['close']>[0];

export type GetCloseReturnTypeFromComponent<C extends BaseModalContentComponent> =
  GetCloseReturnType<React.ComponentPropsWithoutRef<C>>;

export type GetContentProps<P extends IContentProps<any>> = Omit<
  P,
  keyof IContentProps<GetCloseReturnType<P>>
>;

export type GetContentPropsFromComponent<C extends BaseModalContentComponent> = GetContentProps<
  React.ComponentPropsWithoutRef<C>
>;

export interface IShowDialogArgs<C extends BaseModalContentComponent> {
  modalId?: string;
  content: C;
  contentProps?: GetContentPropsFromComponent<C>;
  muiDialogProps?: Omit<DialogProps, 'open' | 'children'>;
  customClose?(args: ICustomCloseArgs<GetCloseReturnTypeFromComponent<C>>): void | Promise<void>;
}

export interface IDialogConfig<C extends BaseModalContentComponent> {
  modalId: string;
  content: C;
  contentProps: GetContentPropsFromComponent<C> | undefined;
  muiDialogProps: Omit<DialogProps, 'open' | 'children'> | undefined;
  open: boolean;
  close(arg?: GetCloseReturnTypeFromComponent<C>): void;
  customClose: ((args: GetCloseReturnTypeFromComponent<C>) => void | Promise<void>) | undefined;
}
