import { storiesOf } from '@storybook/react';
import { Checkbox } from 'modus-ui';
import React, { ReactElement } from 'react';

storiesOf('Components/Checkbox', module)
  .add('Default', (): ReactElement => <Checkbox text="Are you in?" />)
  .add(
    'Disabled Empty',
    (): ReactElement => <Checkbox text={`Cant click me`} disabled />
  )
  .add(
    'Disabled Checked',
    (): ReactElement => <Checkbox text={`Cant click me`} disabled checked />
  )
  .add(
    'With Error',
    (): ReactElement => (
      <Checkbox
        text={`Cant click me`}
        error={'Oops something is wrong.'}
        touched
      />
    )
  );
