import { addDecorator, addParameters } from '@storybook/react';
import React from 'react';

import { ModusUI } from '../src/components/modusui/modusui.component';

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  }
});

addDecorator(storyFn => <ModusUI>{storyFn()}</ModusUI>);
