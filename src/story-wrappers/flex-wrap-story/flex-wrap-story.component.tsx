import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';

export type FlexWrapStoryProps = {} & PropsWithChildren<ReactNode>;

export const FlexWrapStory = (props: FlexWrapStoryProps): ReactElement => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      {props.children}
    </div>
  );
};
