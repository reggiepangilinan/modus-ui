import React, { FunctionComponent, ReactElement, ReactNode } from 'react';

import styles from './button.styles.scss';

export enum ButtonKind {
  Primary = 'Primary',
  Default = 'Default',
  Link = 'Link',
  Ghost = 'Ghost'
}

export type ButtonProps = {
  text: string;
  onClick?: () => void;
  kind?: ButtonKind;
  href?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  style?: React.CSSProperties;
};

const getButtonStyle = (buttonType: ButtonKind): string => {
  switch (buttonType) {
    case ButtonKind.Primary:
      return 'buttonPrimary';

    case ButtonKind.Link:
      return 'buttonLink';

    case ButtonKind.Ghost:
      return 'buttonGhost';

    default:
      return 'buttonDefault';
  }
};

export const Button: FunctionComponent<ButtonProps> = (
  props: ButtonProps
): ReactElement => {
  return (
    <button
      type={props.type ? props.type : 'button'}
      style={props.style ? props.style : undefined}
      className={
        styles[getButtonStyle(props.kind ? props.kind : ButtonKind.Default)]
      }
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <div className={styles.buttonContent}>
        {props.iconLeft && (
          <i className={styles.buttonIconLeft}>{props.iconLeft}</i>
        )}
        {props.kind === ButtonKind.Link && !props.disabled ? (
          <a href={props.href ? props.href : ''} target={'_blank'}>
            {props.text}
          </a>
        ) : (
          props.text
        )}
        {props.iconRight && (
          <i className={styles.buttonIconRight}>{props.iconRight}</i>
        )}
      </div>
    </button>
  );
};
