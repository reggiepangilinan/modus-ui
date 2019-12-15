import React, { ReactElement } from 'react';

import { RadioButtonGroup, RadioButtonGroupOption } from '../../index';

const options: RadioButtonGroupOption[] = [
  { id: 'hot', text: 'This is Hot', value: 'hot' },
  { id: 'cold', text: 'This is Cold', value: 'cold' }
];

export default {
  title: 'Components|RadioButtonGroup',
  component: RadioButtonGroup
};

export const radioButtonGroupDefault = (): ReactElement => (
  <RadioButtonGroup options={options} />
);
radioButtonGroupDefault.story = {
  name: 'Default'
};
export const withLabel = (): ReactElement => (
  <RadioButtonGroup options={options} label="This is some label" />
);
withLabel.story = {
  name: 'With Label'
};
export const withError = (): ReactElement => (
  <RadioButtonGroup
    options={options}
    label="This is some label"
    touched
    error="This is an error message"
  />
);
withError.story = {
  name: 'With Error'
};

export const disabled = (): ReactElement => (
  <RadioButtonGroup options={options} label="This is some label" disabled />
);
disabled.story = {
  name: 'Disabled'
};

export const withChecked = (): ReactElement => (
  <RadioButtonGroup
    id="radioButtonChecked"
    options={options}
    label="This is some label"
    value="hot"
  />
);
withChecked.story = {
  name: 'With checked value'
};

export const disabledChecked = (): ReactElement => (
  <RadioButtonGroup
    id="radioButtonDisabledChecked"
    options={options}
    label="This is some label"
    value="hot"
    disabled
  />
);
disabledChecked.story = {
  name: 'Disabled with checked value'
};

export const itemStyleOverride = (): ReactElement => (
  <RadioButtonGroup
    id="radioButtonItemStyle"
    options={options}
    label="This is some label"
    value="hot"
    disabled
  />
);
itemStyleOverride.story = {
  name: 'ItemStyle Overriden'
};
