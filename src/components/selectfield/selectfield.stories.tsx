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

// export const password = (): ReactElement => (
//   <InputField
//     label="Enter Password"
//     type={'password'}
//     placeholder="Placeholder"
//     value="secrets"
//   />
// );
// password.story = {
//   name: 'Password'
// };

// export const number = (): ReactElement => (
//   <InputField
//     label="This is number field"
//     type={'number'}
//     placeholder="Placeholder"
//     value={100.01}
//   />
// );
// number.story = {
//   name: 'Number'
// };

// export const withError = (): ReactElement => (
//   <InputField
//     label="This is a label"
//     type={'text'}
//     placeholder="Placeholder"
//     touched={true}
//     error="This is an error"
//   />
// );
// withError.story = {
//   name: 'With Error'
// };
