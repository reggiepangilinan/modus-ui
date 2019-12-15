import React, { ReactElement } from 'react';

import { InputField } from '../../index';

export default {
  title: 'Components|InputField',
  component: InputField
};

export const inputFieldDefault = (): ReactElement => (
  <InputField label="Default" type={'text'} placeholder="Placeholder" />
);
inputFieldDefault.story = {
  name: 'Default'
};

export const password = (): ReactElement => (
  <InputField
    label="Enter Password"
    type={'password'}
    placeholder="Placeholder"
    value="secrets"
  />
);
password.story = {
  name: 'Password'
};

export const number = (): ReactElement => (
  <InputField
    label="This is number field"
    type={'number'}
    placeholder="Placeholder"
    value={100.01}
  />
);
number.story = {
  name: 'Number'
};

export const withError = (): ReactElement => (
  <InputField
    label="This is a label"
    type={'text'}
    placeholder="Placeholder"
    touched={true}
    error="This is an error"
  />
);
withError.story = {
  name: 'With Error'
};
