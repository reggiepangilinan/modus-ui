import React, { CSSProperties, FC, ReactElement, ReactNode } from 'react';

import styles from './header.styles.scss';

export type HeaderProps = {
  type?: 'default' | 'withshadow' | undefined;
  style?: CSSProperties;
} & { children: ReactNode };

const getStyle = (type: 'default' | 'withshadow' | undefined): string => {
  if (type && type === 'withshadow') return 'headerWithShadow';
  return 'headerDefault';
};
export const Header: FC<HeaderProps> = (props: HeaderProps): ReactElement => {
  //Your components goes here
  return (
    <header className={styles[getStyle(props.type)]}>{props.children}</header>
  );
};
