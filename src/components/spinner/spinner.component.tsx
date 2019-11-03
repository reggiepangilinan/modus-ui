import PropTypes, { InferProps } from 'prop-types';
import React, { FC } from 'react';

import simplespinner from './simplespinner.svg';
import styles from './spinner.styles.scss';

const props = {
  /** The message to be displayed */
  message: PropTypes.string,
  /** Size of the loader in `px`
   * @default 50px
   */
  size: PropTypes.number,
  /** Fill the size of the container.
   * @default false
   */
  fillcontainer: PropTypes.bool
};

/** Sample Docs */
export type SpinnerProps = InferProps<typeof props>;

/** Yes sample */
export const Spinner: FC<SpinnerProps> = (props: SpinnerProps) => {
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

Spinner.propTypes = props;
Spinner.defaultProps = {
  fillcontainer: undefined,
  message: undefined,
  size: 50
};
