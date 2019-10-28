import { storiesOf } from '@storybook/react';
import { RadioButtonGroup, RadioButtonGroupOption } from 'modus-ui';
import React, { ReactElement } from 'react';

const options: RadioButtonGroupOption[] = [
  { id: 'hot', text: 'This is Hot', value: 'hot' },
  { id: 'cold', text: 'This is Cold', value: 'cold' }
];

storiesOf('Components/RadioButtonGroup', module)
  .add('Default', (): ReactElement => <RadioButtonGroup options={options} />)
  .add(
    'With Label',
    (): ReactElement => (
      <RadioButtonGroup options={options} label="This is some label" />
    )
  )
  .add(
    'With Error',
    (): ReactElement => (
      <RadioButtonGroup
        options={options}
        label="This is some label"
        touched
        error="This is an error message"
      />
    )
  )
  .add(
    'With checked value',
    (): ReactElement => (
      <RadioButtonGroup
        options={options}
        label="This is some label"
        value="hot"
      />
    )
  )
  .add(
    'Disabled',
    (): ReactElement => (
      <RadioButtonGroup options={options} label="This is some label" disabled />
    )
  )
  .add(
    'Disabled with checked value',
    (): ReactElement => (
      <RadioButtonGroup
        options={options}
        label="This is some label"
        value="hot"
        disabled
      />
    )
  )
  .add(
    'Items style overriden',
    (): ReactElement => (
      <RadioButtonGroup
        options={options}
        label="This is some label"
        value="hot"
        itemsStyle={{ flexDirection: 'row' }}
      />
    )
  );
