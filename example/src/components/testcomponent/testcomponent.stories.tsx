import React, { ReactElement } from 'react';

import { TestComponent } from './index';

export default {
  title: 'Components/TestComponent',
  component: TestComponent
};

/**
 * Yes
 */
export const testcomponent = (): ReactElement => (
  <TestComponent>Test</TestComponent>
);
testcomponent.story = {
  name: 'Default'
};
