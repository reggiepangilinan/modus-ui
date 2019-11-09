import React, { CSSProperties, FunctionComponent, ReactElement } from 'react';

import { Icon, IconAngle, IconSize, IconTypes } from '../..';
import styles from './iconbutton.styles.scss';

export type IconButtonProps = {
  onClick?: () => void;
  kind?: IconButtonKind;
  type: IconTypes;
  style?: CSSProperties;
  transform?: IconAngle | string;
  size?: IconSize | number;
  disabled?: boolean;
  isSquare?: boolean;
};

export enum IconButtonKind {
  Primary = 'Primary',
  default = 'Default'
}

const getIconButtonStyle = (
  kind?: IconButtonKind,
  isSquare?: boolean
): string => {
  switch (kind) {
    case IconButtonKind.Primary:
      return isSquare ? 'primarySquareIconButton' : 'primaryRoundIconButton';
    default:
      return isSquare ? 'defaultSquareIconButton' : 'defaultRoundIconButton';
  }
};

export const IconButton: FunctionComponent<IconButtonProps> = (
  props: IconButtonProps
): ReactElement => (
  <button
    className={
      styles[
        getIconButtonStyle(props.kind, props.isSquare ? props.isSquare : false)
      ]
    }
    onClick={props.onClick}
    disabled={props.disabled}
  >
    <Icon
      block={'inline-block'}
      size={props.size}
      type={props.type}
      transform={props.transform}
    />
  </button>
);
