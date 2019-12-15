import React, { ReactElement } from 'react';

import { Checkbox } from '../../index';

export default {
  title: 'Components|Checkbox',
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
    text={`Can't click me`}
    error={'Oops something is wrong.'}
    touched
  />
);
withError.story = {
  name: 'With Error'
};
