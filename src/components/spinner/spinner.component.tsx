import React, { ReactElement } from 'react';

import simplespinner from './simplespinner.svg';
import styles from './spinner.styles.scss';

export type SpinnerProps = {
  /** The message to be displayed */
  message?: string;
  /** Size of the loader in `px`
   * @default 50px
   */
  size?: number;
  /** Fill the size of the container.
   * @default false
   */
  fillcontainer?: boolean;
};

export const Spinner = (props: SpinnerProps): ReactElement => {
  const imageStyle = props.size
    ? { height: `${props.size}px`, width: `${props.size}px` }
    : {};
  return (
    <div
      className={props.fillcontainer ? styles.containerFill : styles.container}
    >
      <img src={simplespinner} style={imageStyle} alt="Loading" />
      <p>{props.message}</p>
    </div>
  );
};
