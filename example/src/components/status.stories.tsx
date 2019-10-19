import React, { ReactElement } from 'react';
import { storiesOf } from '@storybook/react';
import { Status, StatusType } from 'modus-ui';

storiesOf('Shared|Components/Status', module)
  .add(
    'Success',
    (): ReactElement => <Status type={StatusType.Success} text="Complete" />
  )
  .add(
    'Warning',
    (): ReactElement => <Status type={StatusType.Warning} text="Warning" />
  )
  .add(
    'Info',
    (): ReactElement => <Status type={StatusType.Info} text="Some info" />
  )
  .add(
    'Error',
    (): ReactElement => <Status type={StatusType.Error} text="Error" />
  )
  .add(
    'Light',
    (): ReactElement => <Status type={StatusType.Light} text="Light" />
  );
