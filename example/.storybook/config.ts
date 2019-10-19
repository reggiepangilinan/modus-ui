import { configure, addParameters, addDecorator } from '@storybook/react';
import { create } from '@storybook/theming';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

const planitTheme = create({
  base: 'light',
  brandTitle: 'Modus UI',
});

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  addDecorator(withKnobs);
  addDecorator(withSmartKnobs);
  addDecorator(withInfo);
  addParameters({
    options: {
      theme: planitTheme
    }
  });
  req.keys().forEach(req);
}
configure(loadStories, module);
