import { Avatar, AvatarSize } from 'modus-ui';
import React, { ReactElement, ReactNode } from 'react';

import { SpaceAroundStory } from '../story-wrappers/space-around-story/space-around-story.component';
import avatarsample from './avatarsample.png';

export default {
  title: 'Components/Avatars',
  component: Avatar
};

export const avatarsSample = (): ReactElement => (
  <>
    <Avatar src={avatarsample} size={AvatarSize.XLarge} />
    <Avatar src={avatarsample} size={AvatarSize.Large} />
    <Avatar src={avatarsample} size={AvatarSize.Medium} />
    <Avatar src={avatarsample} size={AvatarSize.Small} />
    <Avatar src={avatarsample} size={AvatarSize.XSmall} />
  </>
);
avatarsSample.story = {
  name: 'Image',
  decorators: [
    (storyFn: () => ReactNode): ReactElement => (
      <SpaceAroundStory>{storyFn()}</SpaceAroundStory>
    )
  ]
};

export const avatarsDefault = (): ReactElement => (
  <>
    <Avatar size={AvatarSize.XLarge} />
    <Avatar size={AvatarSize.Large} />
    <Avatar size={AvatarSize.Medium} />
    <Avatar size={AvatarSize.Small} />
    <Avatar size={AvatarSize.XSmall} />
  </>
);
avatarsDefault.story = {
  name: 'Default',
  decorators: [
    (storyFn: () => ReactNode): ReactElement => (
      <SpaceAroundStory>{storyFn()}</SpaceAroundStory>
    )
  ]
};
