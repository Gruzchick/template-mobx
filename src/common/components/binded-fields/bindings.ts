import { checkboxBinding } from './binded-checkbox';
import { datePickerBinding } from './binded-date-picker';
import { selectBinding } from './binded-select';
import { textFieldBinding } from './binded-text-field';

export enum BINDING_NAMES {
  TEXT_FIELD = 'textField',
  SELECT_FIELD = 'selectField',
  DATE_PICKER = 'datePicker',
  CHECKBOX = 'checkbox',
}

export const bindings = {
  [BINDING_NAMES.TEXT_FIELD]: textFieldBinding,
  [BINDING_NAMES.SELECT_FIELD]: selectBinding,
  [BINDING_NAMES.DATE_PICKER]: datePickerBinding,
  [BINDING_NAMES.CHECKBOX]: checkboxBinding,
};
