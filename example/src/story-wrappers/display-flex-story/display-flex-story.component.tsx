import React, { ReactElement, ReactNode, PropsWithChildren } from 'react';

export type DisplayFlexStoryProps = {} & PropsWithChildren<ReactNode>;

export const DisplayFlexStory = (props: DisplayFlexStoryProps): ReactElement => {
  return (
    <div style={{
      display: 'flex'
    }}>
      {props.children}
    </div>
  )
};