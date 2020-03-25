import React, { FC, ReactElement, useState } from 'react';

import { TabItem, Tabs } from '../../tabs/tabs.component';
import { Card } from '../card.component';

export type CardWithTabsProps = {};

export const CardWithTabs: FC<CardWithTabsProps> = (): ReactElement => {
  const [currentTab, setcurrentTab] = useState(1);
  const contentStyle = {
    display: 'flex',
    margin: '100px',
    justifyContent: 'center',
    fontWeight: 800
  };
  return (
    <Card>
      <Tabs>
        <TabItem
          label={'Tito'}
          active={currentTab === 1}
          onClick={(): void => setcurrentTab(1)}
        />
        <TabItem
          label={'Vic'}
          active={currentTab === 2}
          onClick={(): void => setcurrentTab(2)}
        />
        <TabItem
          label={'Joey'}
          active={currentTab === 3}
          onClick={(): void => setcurrentTab(3)}
        />
      </Tabs>
      {currentTab === 1 && (
        <p style={contentStyle}>{`Can't you see I'm trying`}</p>
      )}
      {currentTab === 2 && <p style={contentStyle}>{`I don't even like it`}</p>}
      {currentTab === 3 && <p style={contentStyle}>{`Is this it?`}</p>}
    </Card>
  );
};
