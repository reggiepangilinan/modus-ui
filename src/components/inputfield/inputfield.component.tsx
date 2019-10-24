import React, { FunctionComponent, ReactElement } from 'react';
import styles from './inputfield.styles.scss';

 export type InputFieldProps = {
  name?: string;
  touched?: boolean;
  label: string;
  placeholder: string;
  type?: 'text' | 'password' | 'number' | 'email';
  error?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  min?: string;
  max?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField: FunctionComponent<InputFieldProps> = (props: InputFieldProps): ReactElement => {
  const displayError = props.touched && props.error;
  return (
    <div className={styles.inputField}>
      {displayError ? (
        <label className={styles.labelError}>{props.error}</label>
      ) : (
        <label>{props.label}</label>
      )}
      <input
        name={props.name}
        autoFocus={props.autoFocus}
        disabled={props.disabled}
        type={props.type ? props.type : 'text'}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        min={props.min}
        max={props.max}
        value={props.value}
      />
    </div>
  );
};
