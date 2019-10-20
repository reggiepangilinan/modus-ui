import React, { FunctionComponent, ReactElement } from 'react';
import styles from './status.styles.scss';

export enum StatusType {
  Success = 'Success',
  Error = 'Error',
  Info = 'Info',
  Warning = 'Warning',
  Light = 'Light'
}

export type StatusProps = {
  type: StatusType;
  text: string;
};

const getStatusTypeStyle = (type: StatusType): string => {
  switch (type) {
    case StatusType.Success:
      return styles.success;

    case StatusType.Info:
      return styles.info;

    case StatusType.Error:
      return styles.error;

    case StatusType.Warning:
      return styles.warning;

    case StatusType.Light:
      return styles.light;
  }
};

/**
 * The `Status` component.
 */
export const Status: FunctionComponent<StatusProps> = (props: StatusProps): ReactElement => {
  return (
    <div
      className={`${styles.content} ${getStatusTypeStyle(props.type)}`}
      title={props.text}
    >
      <label>{props.text}</label>
    </div>
  );
};


Status.defaultProps = {
}