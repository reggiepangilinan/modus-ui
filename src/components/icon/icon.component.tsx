import React, { FunctionComponent, ReactElement, CSSProperties } from 'react';
import { IconTypes } from './icontypes.enum';

export enum IconAngle {
  Ninety = 'rotate(90)',
  NegativeNinety = 'rotate(-90)',
  FortyFive = 'rotate(45)',
  NegativeFortyFive = 'rotate(-45)'
}

export enum IconSize {
  XSmall = 12,
  Small = 16,
  Medium = 24,
  Large = 32,
  XLarge = 48
}

export type IconProps = {
  block?: 'block' | 'inline-block';
  type: IconTypes;
  style?: CSSProperties;
  transform?: IconAngle | string;
  size?: IconSize | number;
};

const getIconSize = (props: IconProps): string | number | undefined => {
  return `${props.size ? props.size : IconSize.Medium}px`;
};

export const Icon: FunctionComponent<IconProps> = (
  props: IconProps
): ReactElement => (
  <svg
    viewBox="0 0 1024 1024"
    width={getIconSize(props)}
    height={getIconSize(props)}
    transform={props.transform}
    style={{ display: props.block, ...props.style }}
    aria-label={IconTypes[props.type]}
  >
    <path d={props.type} />
  </svg>
);
