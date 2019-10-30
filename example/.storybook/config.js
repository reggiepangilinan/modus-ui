import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import React from 'react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

const planitTheme = create({
  base: 'light',
  brandTitle: 'Modus UI'
});

// // automatically import all files ending in *.stories.tsx
// const req = require.context('../src', true, /.stories.tsx$/);
// function loadStories() {
//   // addDecorator(withKnobs);
//   // addDecorator(withSmartKnobs);
//   // addDecorator(withInfo({inline:true}));

//   req.keys().forEach(req);
// }
// // configure(loadStories, module);

addParameters({
  options: {
    theme: planitTheme,
    panelPosition: 'right'
  }
});

configure(
  [
    require.context('../src', true, /\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.tsx$/)
  ],
  module
);
