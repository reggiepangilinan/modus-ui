import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';

export type SpaceBetweenStoryProps = {} & PropsWithChildren<ReactNode>;

export const SpaceBetweenStory = (
  props: SpaceBetweenStoryProps
): ReactElement => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '30px 0px'
      }}
    >
      {props.children}
    </div>
  );
};
