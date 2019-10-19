import React, {ReactElement, ReactNode, PropsWithChildren} from 'react';

export type Props = {
  active?: boolean;
  withShadow?: boolean;
  onClick?: () => void;
} & PropsWithChildren<ReactNode>;

export const Card = (props: Props): ReactElement => {

  return (
    <div onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};
