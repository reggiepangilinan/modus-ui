import React, { FunctionComponent, ReactElement } from 'react';

import styles from './checkbox.styles.scss';

export type CheckboxProps = {
  touched?: boolean;
  text: string;
  error?: string;
  checked?: boolean;
  disabled?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox: FunctionComponent<CheckboxProps> = (
  props: CheckboxProps
): ReactElement => {
  const displayError = props.touched && props.error;
  return (
    <div className={styles.checkBoxField}>
      {displayError && (
        <label className={styles.labelError}>{props.error}</label>
      )}
      <label className={styles.labelCheckBoxWrapper}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={props.checked}
          disabled={props.disabled}
          onBlur={props.onBlur}
          onChange={props.onChange}
        />
        <p>{props.text}</p>
      </label>
    </div>
  );
};
