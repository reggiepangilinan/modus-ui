import React, { ReactElement } from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from './index';

storiesOf('Shared|Components/Card', module).add(
  'Default',
  (): ReactElement => (
    <Card>
        Test
    </Card>
  )
);
