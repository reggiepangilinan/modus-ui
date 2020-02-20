import React, { CSSProperties, FC, ReactElement, ReactNode } from 'react';

import styles from './card.styles.scss';

export type CardProps = {
  id?: string;
  type?: 'default' | 'outline' | undefined;
  style?: CSSProperties;
} & { children: ReactNode };

const getStyle = (type: 'default' | 'outline' | undefined): string => {
  if (type && type === 'outline') return 'cardOutline';
  return 'cardDefault';
};

export const Card: FC<CardProps> = (props: CardProps): ReactElement => {
  return (
    <div
      id={props.id}
      className={styles[getStyle(props.type)]}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
