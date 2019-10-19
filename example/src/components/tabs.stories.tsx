import React, { ReactElement } from 'react';
import { storiesOf } from '@storybook/react';
import { Tabs, TabItem } from 'modus-ui';

storiesOf('Shared|Components/Tabs', module).add(
  'Default',
  (): ReactElement => (
    <Tabs>
      <TabItem label={'Tab 1'} active={true} />
      <TabItem label={'Tab 2'} active={false} />
      <TabItem label={'Tab 3'} active={false} />
    </Tabs>
  )
);
