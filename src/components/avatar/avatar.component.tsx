import React, { FC, ReactElement } from 'react';

import { Icon } from '../icon/icon.component';
import { IconTypes } from '../icon/icontypes.enum';
import styles from './avatar.styles.scss';

export enum AvatarSize {
  XSmall = 24,
  Small = 28,
  Medium = 36,
  Large = 48,
  XLarge = 96
}

export type AvatarProps = {
  /**
   * When source is empty it will display the default `Avatar`
   */
  src?: string;
  size?: AvatarSize;
  alt?: string;
};

const getAvatarDefaultStyle = (size: AvatarSize): string => {
  switch (size) {
    case AvatarSize.XLarge:
      return 'avatarDefaultXL';
    case AvatarSize.Large:
      return 'avatarDefaultLG';
    case AvatarSize.Medium:
      return 'avatarDefaultMD';
    case AvatarSize.Small:
      return 'avatarDefaultSM';
    case AvatarSize.XSmall:
      return 'avatarDefaultXS';
    default:
      return 'avatarDefaultSM';
  }
};

/**
 * The `Avatar` component
 */
export const Avatar: FC<AvatarProps> = (props: AvatarProps): ReactElement => {
  const size = props.size ? props.size : AvatarSize.Small;
  const style = {
    height: `${size}px`,
    width: `${size}px`
  };

  if (props.src)
    return (
      <img
        className={styles.avatar}
        style={style}
        src={props.src}
        alt={props.alt}
      />
    );
  return (
    <span className={styles[getAvatarDefaultStyle(size)]} style={style}>
      <Icon type={IconTypes.useralt} />
    </span>
  );
};
Avatar.defaultProps = {
  size: AvatarSize.Small
};
