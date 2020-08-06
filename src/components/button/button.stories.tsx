import React, { ReactElement, ReactNode } from 'react';

import { SpaceAroundStory } from '../../story-wrappers/space-around-story/space-around-story.component';
import { Icon, IconSize } from '../icon/icon.component';
import { IconTypes } from '../icon/icontypes.enum';
import { Button, ButtonKind } from './button.component';

export default {
  title: 'Components/Button',
  component: Button
};
/**
 * All Status
 */
export const allStatus = (): ReactElement => (
  <>
    <Button kind={ButtonKind.Primary} text="Primary" />
    <Button text="Default" />
    <Button
      kind={ButtonKind.Link}
      text="Link Button"
      href="http://google.com"
    />
    <Button kind={ButtonKind.Ghost} text="Ghost Button" />
  </>
);
allStatus.story = {
  name: 'All Status',
  decorators: [
    (storyFn: () => ReactNode): ReactElement => (
      <SpaceAroundStory>{storyFn()}</SpaceAroundStory>
    )
  ]
};

export const primary = (): ReactElement => (
  <>
    <Button kind={ButtonKind.Primary} text="Primary" />
    <Button kind={ButtonKind.Primary} text="Disabled" disabled />
  </>
);
primary.story = {
  name: 'Primary',
  decorators: [
    (storyFn: () => ReactNode): ReactElement => (
      <SpaceAroundStory>{storyFn()}</SpaceAroundStory>
    )
  ]
};

export const defaultButton = (): ReactElement => (
  <>
    <Button text="Default" />
    <Button text="Disabled" disabled />
  </>
);
defaultButton.story = {
  name: 'Default',
  decorators: [
    (storyFn: () => ReactNode): ReactElement => (
      <SpaceAroundStory>{storyFn()}</SpaceAroundStory>
    )
  ]
};

export const linkButton = (): ReactElement => (
  <>
    <Button kind={ButtonKind.Link} text="Link Button" />
    <Button kind={ButtonKind.Link} text="Disabled" disabled />
  </>
);
linkButton.story = {
  name: 'Link Button',
  decorators: [
    (storyFn: () => ReactNode): ReactElement => (
      <SpaceAroundStory>{storyFn()}</SpaceAroundStory>
    )
  ]
};

export const ghostButton = (): ReactElement => (
  <>
    <Button kind={ButtonKind.Ghost} text="Ghost Button" />
    <Button kind={ButtonKind.Ghost} text="Disabled" disabled />
  </>
);
ghostButton.story = {
  name: 'Ghost Button',
  decorators: [
    (storyFn: () => ReactNode): ReactElement => (
      <SpaceAroundStory>{storyFn()}</SpaceAroundStory>
    )
  ]
};

export const iconLeft = (): ReactElement => (
  <>
    <Button
      kind={ButtonKind.Primary}
      iconLeft={<Icon type={IconTypes.check} size={IconSize.XSmall} />}
      text="Primary"
    />
    <Button
      kind={ButtonKind.Primary}
      iconLeft={<Icon type={IconTypes.check} size={IconSize.XSmall} />}
      text="Disabled"
      disabled
    />
    <Button
      kind={ButtonKind.Default}
      iconLeft={<Icon type={IconTypes.check} size={IconSize.XSmall} />}
      text="Default"
    />
    <Button
      kind={ButtonKind.Default}
      iconLeft={<Icon type={IconTypes.check} size={IconSize.XSmall} />}
      text="Disabled"
      disabled
    />
    <Button
      kind={ButtonKind.Ghost}
      iconLeft={<Icon type={IconTypes.check} size={IconSize.XSmall} />}
      text="Ghost Button"
    />
    <Button
      kind={ButtonKind.Ghost}
      iconLeft={<Icon type={IconTypes.check} size={IconSize.XSmall} />}
      text="Disabled"
      disabled
    />
  </>
);
iconLeft.story = {
  name: 'Button With Left Icon',
  decorators: [
    (storyFn: () => ReactNode): ReactElement => (
      <SpaceAroundStory>{storyFn()}</SpaceAroundStory>
    )
  ]
};

export const iconRight = (): ReactElement => (
  <>
    <Button
      kind={ButtonKind.Primary}
      iconRight={<Icon type={IconTypes.star} size={IconSize.XSmall} />}
      text="Primary"
    />
    <Button
      kind={ButtonKind.Primary}
      iconRight={<Icon type={IconTypes.star} size={IconSize.XSmall} />}
      text="Disabled"
      disabled
    />
    <Button
      kind={ButtonKind.Default}
      iconRight={<Icon type={IconTypes.star} size={IconSize.XSmall} />}
      text="Default"
    />
    <Button
      kind={ButtonKind.Default}
      iconRight={<Icon type={IconTypes.star} size={IconSize.XSmall} />}
      text="Disabled"
      disabled
    />
    <Button
      kind={ButtonKind.Ghost}
      iconRight={<Icon type={IconTypes.star} size={IconSize.XSmall} />}
      text="Ghost Button"
    />
    <Button
      kind={ButtonKind.Ghost}
      iconRight={<Icon type={IconTypes.star} size={IconSize.XSmall} />}
      text="Disabled"
      disabled
    />
  </>
);
iconRight.story = {
  name: 'Button With Right Icon',
  decorators: [
    (storyFn: () => ReactNode): ReactElement => (
      <SpaceAroundStory>{storyFn()}</SpaceAroundStory>
    )
  ]
};

// .add(
//   'Secondary',
//   (): ReactElement => <Button kind={ButtonKind.Secondary} text="Secondary" />
// )
// .add(
//   'Light',
//   (): ReactElement => <Button kind={ButtonKind.Light} text="Light" />
// )
// .add(
//   'Outline',
//   (): ReactElement => <Button kind={ButtonKind.Outline} text="Outline" />
// )
// .add(
//   'Icon on Left',
//   (): ReactElement => (
//     <Button iconLeft={<MdAdd />} kind={ButtonKind.Primary} text="Left Icon" />
//   )
// )
// .add(
//   'Icon on Right',
//   (): ReactElement => (
//     <Button
//       iconRight={<MdExpandMore />}
//       kind={ButtonKind.Primary}
//       text="Right Icon"
//     />
//   )
// )
// .add(
//   'Icon on Left and Right',
//   (): ReactElement => (
//     <Button
//       iconLeft={<MdAdd />}
//       iconRight={<MdExpandMore />}
//       kind={ButtonKind.Primary}
//       text="Icons"
//     />
//   )
// )
// .add(
//   'Inline style',
//   (): ReactElement => (
//     <Button
//       kind={ButtonKind.Primary}
//       text="Inline Style"
//       style={{ color: 'pink' }}
//     />
//   )
// );
