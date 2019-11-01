import React, { ReactElement } from 'react';

import { Card } from './index';

export default {
  title: 'Components/Card',
  component: Card
};

/**
 * Yes
 */
export const card = (): ReactElement => <Card>Test</Card>;
card.story = {
  name: 'Default'
};
