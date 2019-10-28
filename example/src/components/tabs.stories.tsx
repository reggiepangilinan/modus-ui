import React, { ReactElement } from 'react';
import { Tabs, TabItem } from 'modus-ui';

export default {
  title: 'Components|Tabs',
  component: Tabs
};

/**
 * Tabs
 */
export const tabs = (): ReactElement => (
  <Tabs>
    <TabItem label={'Tab 1'} active={true} />
    <TabItem label={'Tab 2'} active={false} />
    <TabItem label={'Tab 3'} active={false} />
  </Tabs>
);
tabs.story = {
  name: 'Default'
};
