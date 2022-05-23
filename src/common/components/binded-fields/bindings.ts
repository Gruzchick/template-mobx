import { checkboxBinding } from './binded-checkbox/checkbox-binding';
import { datePickerBinding } from './binded-date-picker/date-picker-binding';
import { selectBinding } from './binded-select/select-binding';
import { textFieldBinding } from './binded-text-field/text-field-binding';

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
