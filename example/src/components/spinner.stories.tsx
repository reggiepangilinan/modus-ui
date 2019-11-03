import { Spinner } from 'modus-ui';
import React, { ReactElement } from 'react';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    componentSubtitle: 'This is a spinner'
  }
};

export const defaultSpinner = (): ReactElement => <Spinner />;
defaultSpinner.story = {
  name: 'Default'
};

export const withMessage = (): ReactElement => (
  <>
    <Spinner message="Hello from Spinner" />
  </>
);
withMessage.story = {
  name: 'With Message'
};

export const fillContainer = (): ReactElement => <Spinner fillcontainer />;
fillContainer.story = {
  name: 'Fill Container'
};

export const sizeSpecified = (): ReactElement => <Spinner size={150} />;
sizeSpecified.story = {
  name: 'Size specified'
};
