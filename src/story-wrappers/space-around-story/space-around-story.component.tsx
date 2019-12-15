import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';

export type SpaceAroundStoryProps = {} & PropsWithChildren<ReactNode>;

export const SpaceAroundStory = (
  props: SpaceAroundStoryProps
): ReactElement => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        margin: '30px 0px',
        alignItems: 'flex-start'
      }}
    >
      {props.children}
    </div>
  );
};
