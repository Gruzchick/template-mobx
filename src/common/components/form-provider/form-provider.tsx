import { observer } from 'mobx-react';
import type Form from 'mobx-react-form';
import type { FC } from 'react';
import React from 'react';

export const FormContext = React.createContext<Form>(undefined as unknown as Form);

export interface IFormProviderProps {
  form: Form;
}

export const FormProvider: FC<IFormProviderProps> = observer(({ form, children }) => (
  <FormContext.Provider value={form}>{children}</FormContext.Provider>
));

FormProvider.displayName = 'FormProvider';
