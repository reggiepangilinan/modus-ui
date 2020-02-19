import React, { CSSProperties, FC, ReactElement, ReactNode } from 'react';

import styles from './card.styles.scss';

export type CardProps = {
  id?: string;
  width?: number;
  type?: 'default' | 'outline' | undefined;
  style?: CSSProperties;
} & { children: ReactNode };

export const Card: FC<CardProps> = (props: CardProps): ReactElement => {
  return (
    <div id={props.id} className={styles.cardDefault} style={props.style}>
      {props.children}
    </div>
  );
};
