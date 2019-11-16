import { withInfo } from '@storybook/addon-info';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
const modusUITheme = create({
  base: 'light',
  brandTitle: 'Modus UI'
});

// addDecorator(withKnobs);
// addDecorator(withInfo({ inline: true }));
addParameters({
  options: {
    theme: modusUITheme,
    panelPosition: 'right'
  }
});

// automatically import all files ending in *.stories.(tsx|jsx)
configure(require.context('../src', true, /\.stories\.(mdx|[tj]sx?)$/), module);
