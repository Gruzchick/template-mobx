/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call,compat/compat,@typescript-eslint/no-unsafe-return,unicorn/no-null */
import _ from 'lodash';
import type {
  ValidationPluginConstructor,
  ValidationPluginInterface,
} from 'mobx-react-form/lib/models/ValidatorInterface';

class YupPlugin implements ValidationPluginInterface {
  promises = [];

  config = null;

  state = null;

  extend = null;

  validator = null;

  schema = null;

  constructor({ config = {}, state = null, promises = [] }: ValidationPluginConstructor) {
    this.state = state;
    this.promises = promises;
    this.extend = config.extend;
    this.validator = config.package || config;
    this.schema = config.schema(this.validator);
    this.extendValidator();
  }

  extendValidator() {
    // extend using "extend" callback
    if (_.isFunction(this.extend)) {
      this.extend({
        validator: this.validator,
        form: this.state.form,
      });
    }
  }

  validate(field) {
    const $p = new Promise((resolve) =>
      this.validator
        .reach(this.schema, field.path)
        .label(field.label)
        .validate(field.validatedValue, {
          strict: true,
          context: { values: this.state.form.values(), form: this.state.form },
        })
        .then(() => this.handleAsyncPasses(field, resolve))
        .catch((error) => this.handleAsyncFails(field, resolve, error)),
    );

    this.promises.push($p);
  }

  handleAsyncPasses(field, resolve) {
    field.setValidationAsyncData(true);
    field.showAsyncErrors();
    resolve();
  }

  handleAsyncFails(field, resolve, error) {
    field.setValidationAsyncData(false, error.errors[0]);
    this.executeAsyncValidation(field);
    field.showAsyncErrors();
    resolve();
  }

  executeAsyncValidation(field) {
    if (field.validationAsyncData.valid === false) {
      field.invalidate(field.validationAsyncData.message, true);
    }
  }
}

export const yupPluginAdapter = (config?: any) => ({
  class: YupPlugin,
  config,
});
