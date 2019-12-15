import React, { ReactElement, ReactNode } from 'react';

import { SpaceAroundStory } from '../../story-wrappers/space-around-story/space-around-story.component';
import { IconAngle, IconSize } from '../icon/icon.component';
import { IconTypes } from '../icon/icontypes.enum';
import { IconButton, IconButtonKind } from '../iconbutton/iconbutton.component';

export default {
  title: 'Components|IconButton',
  component: IconButton,
  decorators: [
    (storyFn: () => ReactNode): ReactElement => (
      <SpaceAroundStory>{storyFn()}</SpaceAroundStory>
    )
  ]
};

export const iconDefault = (): ReactElement => (
  <>
    <IconButton type={IconTypes.menu} kind={IconButtonKind.Primary} />
    <IconButton type={IconTypes.check} kind={IconButtonKind.Primary} />
    <IconButton type={IconTypes.beaker} kind={IconButtonKind.Primary} />
    <IconButton type={IconTypes.basket} isSquare />
    <IconButton type={IconTypes.admin} isSquare />
    <IconButton type={IconTypes.calendar} isSquare />
  </>
);
iconDefault.story = {
  name: 'Default'
};

export const iconSizes = (): ReactElement => (
  <>
    <IconButton
      type={IconTypes.ellipsis}
      kind={IconButtonKind.Primary}
      size={IconSize.XSmall}
      transform={IconAngle.Ninety}
    />
    <IconButton
      type={IconTypes.ellipsis}
      kind={IconButtonKind.Primary}
      size={IconSize.Small}
      transform={IconAngle.Ninety}
    />
    <IconButton
      type={IconTypes.ellipsis}
      kind={IconButtonKind.Primary}
      size={IconSize.Medium}
      transform={IconAngle.Ninety}
    />

    <IconButton
      type={IconTypes.ellipsis}
      kind={IconButtonKind.Primary}
      size={IconSize.Large}
      transform={IconAngle.Ninety}
    />

    <IconButton
      type={IconTypes.ellipsis}
      kind={IconButtonKind.Primary}
      size={IconSize.XLarge}
      transform={IconAngle.Ninety}
    />
  </>
);
iconSizes.story = {
  name: 'Sizes'
};

export const iconSizesSquare = (): ReactElement => (
  <>
    <IconButton
      type={IconTypes.timer}
      isSquare
      size={IconSize.XSmall}
      transform={IconAngle.Ninety}
    />
    <IconButton
      type={IconTypes.timer}
      isSquare
      size={IconSize.Small}
      transform={IconAngle.Ninety}
    />
    <IconButton
      type={IconTypes.timer}
      isSquare
      size={IconSize.Medium}
      transform={IconAngle.Ninety}
    />

    <IconButton
      type={IconTypes.timer}
      isSquare
      size={IconSize.Large}
      transform={IconAngle.Ninety}
    />

    <IconButton
      type={IconTypes.timer}
      isSquare
      size={IconSize.XLarge}
      transform={IconAngle.Ninety}
    />
  </>
);
iconSizesSquare.story = {
  name: 'Sizes - Square'
};
