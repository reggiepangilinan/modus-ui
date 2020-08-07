import React, { ReactElement } from 'react';

import { Checkbox } from '../checkbox/checkbox.component';

export default {
  title: '2-Components/Checkbox',
  component: Checkbox
};

export const checkBoxDefault = (): ReactElement => (
  <Checkbox text="Are you in?" />
);
checkBoxDefault.story = {
  name: 'Default'
};

export const disabledUnchecked = (): ReactElement => (
  <Checkbox text={`Can't click me`} disabled />
);
disabledUnchecked.story = {
  name: 'Disabled Unchecked'
};

export const disabledChecked = (): ReactElement => (
  <Checkbox text={`Can't click me`} disabled checked />
);
disabledChecked.story = {
  name: 'Disabled Checked'
};

export const withError = (): ReactElement => (
  <Checkbox
    text={`Am I sorry I have error?`}
    error={'Oops something is wrong.'}
    touched
  />
);
withError.story = {
  name: 'With Error'
};
