import React, { ReactElement } from 'react';

import {
  SelectField,
  SelectFieldOption
} from '../selectfield/selectfield.component';

const options: SelectFieldOption[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

export default {
  title: 'Components|SelectField',
  component: SelectField
};

export const selectFieldDefault = (): ReactElement => (
  <SelectField
    name="defaultField"
    label=""
    placeholder="Placeholder"
    currentValue={undefined}
    options={options}
  />
);
selectFieldDefault.story = {
  name: 'Default'
};

export const selectFieldLabel = (): ReactElement => (
  <SelectField
    name="selectFieldLabel"
    label="With Label"
    placeholder="Placeholder"
    currentValue={undefined}
    options={options}
  />
);
selectFieldLabel.story = {
  name: 'With Label'
};

export const selectFieldWithValue = (): ReactElement => (
  <SelectField
    name="selectFieldWithValue"
    label="This one has value selected"
    placeholder="Placeholder"
    currentValue={{ value: 'chocolate', label: 'Chocolate' }}
    options={options}
  />
);
selectFieldWithValue.story = {
  name: 'With Value Selected'
};

export const selectFieldWithError = (): ReactElement => (
  <SelectField
    name="selectFieldWithError"
    label="This one has value selected"
    placeholder="Placeholder"
    currentValue={undefined}
    touched={true}
    error={'This is a sample error message'}
    options={options}
  />
);
selectFieldWithError.story = {
  name: 'With Error'
};
