import React, {
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
  ReactNode
} from 'react';

import { FlexWrapStory } from '../../story-wrappers/flex-wrap-story/flex-wrap-story.component';
import { SpaceAroundStory } from '../../story-wrappers/space-around-story/space-around-story.component';
import { Icon, IconAngle, IconSize } from '../icon/icon.component';
import { IconTypes } from '../icon/icontypes.enum';

export default {
  title: 'Components|Icons',
  component: Icon
};

type ItemProps = {} & PropsWithChildren<ReactNode>;
const Item: FunctionComponent<ItemProps> = (props: ItemProps): ReactElement => (
  <span
    style={{
      display: 'flex',
      width: '150px',
      margin: '0px 25px 25px 0px'
    }}
  >
    {props.children}
  </span>
);

//TODO: Might be converted to a decorator. We'll see 🤗
type TitleProps = {} & PropsWithChildren<ReactNode>;
const Title: FunctionComponent<TitleProps> = (
  props: TitleProps
): ReactElement => <h2 style={{ margin: '0px 0px 40px' }}>{props.children}</h2>;

export const allIcons = (): ReactElement => (
  <>
    <Title>There are {Object.keys(IconTypes).length} icons</Title>
    <FlexWrapStory>
      {Object.keys(IconTypes).map(key => {
        return (
          <Item key={key}>
            <Icon
              type={Object(IconTypes)[key]}
              style={{ marginRight: '10px' }}
            />
            <label>{key}</label>
          </Item>
        );
      })}
    </FlexWrapStory>
  </>
);
allIcons.story = {
  name: 'All Icons'
};

export const iconDefault = (): ReactElement => (
  <>
    <Icon type={IconTypes.basket} />
    <Icon type={IconTypes.admin} />
    <Icon type={IconTypes.alert} />
  </>
);
iconDefault.story = {
  name: 'Default',
  decorators: [
    (storyFn: () => ReactNode): ReactElement => (
      <SpaceAroundStory>{storyFn()}</SpaceAroundStory>
    )
  ]
};

export const sizes = (): ReactElement => (
  <>
    <Icon type={IconTypes.paperclip} size={IconSize.XSmall} />
    <Icon type={IconTypes.paperclip} size={IconSize.Small} />
    <Icon type={IconTypes.paperclip} size={IconSize.Medium} />
    <Icon type={IconTypes.paperclip} size={IconSize.Large} />
    <Icon type={IconTypes.paperclip} size={IconSize.XLarge} />
    <Icon type={IconTypes.paperclip} size={100} />
  </>
);
sizes.story = {
  name: 'Sizes',
  decorators: [
    (storyFn: () => ReactNode): ReactElement => (
      <SpaceAroundStory>{storyFn()}</SpaceAroundStory>
    )
  ]
};

export const customStyle = (): ReactElement => (
  <>
    <Icon
      type={IconTypes.heart}
      style={{
        fill: 'red',
        backgroundColor: 'pink',
        padding: '10px'
      }}
    />
  </>
);
customStyle.story = {
  name: 'Style',
  decorators: [
    (storyFn: () => ReactNode): ReactElement => (
      <SpaceAroundStory>{storyFn()}</SpaceAroundStory>
    )
  ]
};

export const iconInlineBlock = (): ReactElement => (
  <>
    <p>Block icons will take up the whole block.</p>
    <Icon type={IconTypes.arrowdown} block={'block'} />
    <Icon type={IconTypes.arrowleftalt} block={'block'} />
    <Icon type={IconTypes.users} block={'block'} />
  </>
);

iconInlineBlock.story = {
  name: 'Block'
};

export const iconAngled = (): ReactElement => (
  <>
    <Item>
      <Icon type={IconTypes.ellipsis} transform={IconAngle.FortyFive} />
      <label> (45deg) </label>
    </Item>
    <Item>
      <Icon type={IconTypes.ellipsis} transform={IconAngle.Ninety} />
      <label> (90deg) </label>
    </Item>
    <Item>
      <Icon type={IconTypes.ellipsis} transform={IconAngle.NegativeFortyFive} />
      <label> (-45deg) </label>
    </Item>
    <Item>
      <Icon type={IconTypes.heart} transform={IconAngle.NegativeNinety} />
      <label> (-90deg) </label>
    </Item>
  </>
);
iconAngled.story = {
  name: 'Angle',
  decorators: [
    (storyFn: () => ReactNode): ReactElement => (
      <SpaceAroundStory>{storyFn()}</SpaceAroundStory>
    )
  ]
};
