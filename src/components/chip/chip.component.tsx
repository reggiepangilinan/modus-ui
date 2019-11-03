import React, { FunctionComponent, ReactElement } from 'react';

import { Icon, IconSize, IconTypes } from '../..';
import styles from './chip.styles.scss';

export enum ChipType {
  Success = 'Success',
  Error = 'Error',
  Info = 'Info',
  Warning = 'Warning'
}

export type ChipProps = {
  type?: ChipType;
  text: string;
  disabled?: boolean;
  onDelete?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

const getChipTypeStyle = (type?: ChipType): string => {
  switch (type) {
    case ChipType.Success:
      return `${styles.types} ${styles.success}`;

    case ChipType.Error:
      return `${styles.types} ${styles.error}`;

    case ChipType.Info:
      return `${styles.types} ${styles.info}`;

    case ChipType.Warning:
      return `${styles.types} ${styles.warning}`;

    default:
      return '';
  }
};

const getChipDisableStyle = (disabled?: boolean): string => {
  if (disabled) return styles.disabled;
  return '';
};

export const Chip: FunctionComponent<ChipProps> = (
  props: ChipProps
): ReactElement => {
  const { disabled, onDelete, text, type } = props;

  return (
    <div
      className={`${styles.chip} 
      ${getChipTypeStyle(type)} 
      ${getChipDisableStyle(disabled)}`}
    >
      <span>{text}</span>

      {!disabled && props.onDelete && (
        <div className={styles.button} onClick={onDelete}>
          <Icon type={IconTypes.close} size={IconSize.Small} />
        </div>
      )}
    </div>
  );
};
