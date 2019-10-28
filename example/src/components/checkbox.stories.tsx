import { storiesOf } from '@storybook/react';
import { Checkbox } from 'modus-ui';
import React, { ReactElement } from 'react';

storiesOf('Components/Checkbox', module)
  .add('Default', (): ReactElement => <Checkbox text="Are you in?" />)
  .add(
    'Disabled',
    (): ReactElement => <Checkbox text={`Cant click me`} disabled />
  );
