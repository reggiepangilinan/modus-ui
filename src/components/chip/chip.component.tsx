import React, { FunctionComponent, ReactElement } from 'react';

import { Icon, IconSize, IconTypes } from '../..';
import styles from './chip.styles.scss';

export type ChipProps = {
  text: string;
  disabled: boolean;
};

export const Chip: FunctionComponent<ChipProps> = (
  props: ChipProps
): ReactElement => {
  return (
    <div className={styles.container}>
      <span>{props.text}</span>
      <Icon type={IconTypes.close} size={IconSize.Small} />
    </div>
  );
};
