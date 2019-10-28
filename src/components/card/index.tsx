import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';

import styles from './styles.scss';

type Props = {
  active?: boolean;
  withShadow?: boolean;
  onClick?: () => void;
} & PropsWithChildren<ReactNode>;

export const Card = (props: Props): ReactElement => {
  const defaultCardStyle = props.active
    ? `${styles.cardContainer} ${styles.active}`
    : styles.cardContainer;
  return (
    <div
      className={
        props.withShadow ? styles.cardContainerWithShadow : defaultCardStyle
      }
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};
