import { Chip, ChipType } from 'modus-ui';
import React, { ReactElement, ReactNode } from 'react';

import { SpaceBetweenStory } from '../story-wrappers/space-between-story/space-between-story';

export default {
  title: 'Components|Chips',
  component: Chip
};

const decorator = (storyFn: () => ReactNode): ReactElement => (
  <SpaceBetweenStory>{storyFn()}</SpaceBetweenStory>
);

/**
 * All Chips
 */
export const allChips = (): ReactElement => (
  <>
    <Chip text="Default" />
    <Chip text="Disabled" disabled={true} />
    <Chip text="Removable" onDelete={() => alert('Removed!')} />
    <Chip text="Success" type={ChipType.Success} />
    <Chip text="Error" type={ChipType.Error} />
    <Chip text="Information" type={ChipType.Info} />
    <Chip
      text="Success"
      type={ChipType.Warning}
      onDelete={() => alert('Removed!')}
    />
  </>
);

allChips.story = {
  name: 'All Chips',
  decorators: [decorator]
};

/**
 * Default Chip
 */
export const defaultChip = (): ReactElement => (
  <>
    <Chip text="Default" />
  </>
);

defaultChip.story = {
  name: 'Default Chip',
  decorators: [decorator]
};

/**
 * Disabled Chip
 */
export const disabledChip = (): ReactElement => (
  <>
    <Chip text="Disabled" disabled={true} />
  </>
);

disabledChip.story = {
  name: 'Disabled Chip',
  decorators: [decorator]
};

export const removableChip = (): ReactElement => (
  <>
    <Chip text="Removable" onDelete={() => alert('Removed!')} />
  </>
);

removableChip.story = {
  name: 'Removable Chip',
  decorators: [decorator]
};
