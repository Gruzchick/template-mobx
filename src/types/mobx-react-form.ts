// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Field, Form } from 'mobx-react-form';

declare module 'mobx-react-form' {
  export class Field {
    bind<R extends Record<string, any> = Record<string, any>>(props: Record<string, any>): R;
  }

  export class Form<Values extends Record<string, any> = Record<string, any>> {
    values(): Values;
    $(key: keyof Values): Field;
  }
}
