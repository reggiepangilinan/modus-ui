import { storiesOf } from '@storybook/react';
import { InputField } from 'modus-ui';
import React, { ReactElement } from 'react';

storiesOf('Components/InputField', module)
  .add(
    'Text',
    (): ReactElement => (
      <InputField label="Default" type={'text'} placeholder="Placeholder" />
    )
  )
  .add(
    'Password',
    (): ReactElement => (
      <InputField
        label="Enter Password"
        type={'password'}
        placeholder="Placeholder"
      />
    )
  )
  .add(
    'Number',
    (): ReactElement => (
      <InputField
        label="This is number field"
        type={'number'}
        placeholder="Placeholder"
      />
    )
  )
  .add(
    'With label',
    (): ReactElement => (
      <InputField
        label="This is a label"
        type={'text'}
        placeholder="Placeholder"
      />
    )
  )
  .add(
    'With error',
    (): ReactElement => (
      <InputField
        label="This is a label"
        type={'text'}
        placeholder="Placeholder"
        touched={true}
        error="This is an error"
      />
    )
  );
