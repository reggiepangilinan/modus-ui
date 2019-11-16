import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';

export type Props = {
  /**
   * So this is a description
   *
   * @default false
   */
  active?: boolean;
  withShadow?: boolean;
  onClick?: () => void;
} & PropsWithChildren<ReactNode>;

/** Yes */
export const TestComponent = (props: Props): ReactElement => {
  return <div onClick={props.onClick}>{props.children}</div>;
};
