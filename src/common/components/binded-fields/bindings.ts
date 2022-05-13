import { selectBinding } from './select/select-binding';
import { textFieldBinding } from './text-field/text-field-binding';

export enum BINDING_NAMES {
  TEXT_FIELD = 'textField',
  SELECT_FIELD = 'selectField',
}

export const bindings = {
  [BINDING_NAMES.TEXT_FIELD]: textFieldBinding,
  [BINDING_NAMES.SELECT_FIELD]: selectBinding,
};
