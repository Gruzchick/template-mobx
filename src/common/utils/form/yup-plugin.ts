/* eslint-disable */
import _ from 'lodash';
import type {
  ValidationPluginConstructor,
  ValidationPluginInterface,
} from 'mobx-react-form/lib/models/ValidatorInterface';

class YupPlugin implements ValidationPluginInterface {
  promises = [];

  config = null;

  // @ts-ignore: Этот код скопирован с небольшими изменениями из библиотеки react-mobx-form
  state = null;

  extend = null;

  validator = null;

  schema = null;

  // @ts-ignore: Этот код скопирован с небольшими изменениями из библиотеки react-mobx-form
  constructor({ config = {}, state = null, promises = [] }: ValidationPluginConstructor) {
    // @ts-ignore: Этот код скопирован с небольшими изменениями из библиотеки react-mobx-form
    this.state = state;
    // @ts-ignore: Этот код скопирован с небольшими изменениями из библиотеки react-mobx-form
    this.promises = promises;
    this.extend = config.extend;
    this.validator = config.package || config;
    this.schema = config.schema(this.validator);
    this.extendValidator();
  }

  extendValidator() {
    // extend using "extend" callback
    if (_.isFunction(this.extend)) {
      // @ts-ignore: Этот код скопирован с небольшими изменениями из библиотеки react-mobx-form
      this.extend({
        validator: this.validator,
        // @ts-ignore: Этот код скопирован с небольшими изменениями из библиотеки react-mobx-form
        form: this.state.form,
      });
    }
  }

  validate(field) {
    const $p = new Promise((resolve) =>
      // @ts-ignore: Этот код скопирован с небольшими изменениями из библиотеки react-mobx-form
      this.validator
        .reach(this.schema, field.path)
        .label(field.label)
        .validate(field.validatedValue, {
          strict: true,
          // @ts-ignore: Этот код скопирован с небольшими изменениями из библиотеки react-mobx-form
          context: { values: this.state.form.values(), form: this.state.form },
        })
        .then(() => this.handleAsyncPasses(field, resolve))
        .catch((error) => this.handleAsyncFails(field, resolve, error)),
    );

    // @ts-ignore: Этот код скопирован с небольшими изменениями из библиотеки react-mobx-form
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
/* eslint-enable */
