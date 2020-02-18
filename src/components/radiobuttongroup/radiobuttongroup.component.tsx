import React, { CSSProperties, FunctionComponent, ReactElement } from 'react';

import styles from './radiobuttongroup.styles.scss';

export type RadioButtonGroupProps = {
  id?: string;
  label?: string;
  touched?: boolean;
  error?: string;
  disabled?: boolean;
  value?: string | number;
  options: RadioButtonGroupOption[];
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  itemsStyle?: CSSProperties;
};

export type RadioButtonGroupOption = {
  id: string;
  text: string;
  value: string | number;
};

export const RadioButtonGroup: FunctionComponent<RadioButtonGroupProps> = (
  props: RadioButtonGroupProps
): ReactElement => {
  const displayError = props.touched && props.error;

  if (!props.options) throw Error('options is required');

  return (
    <div className={styles.radioButtonGroup} id={props.id}>
      <div role="group">
        {displayError ? (
          <legend className={styles.labelError}>{props.error}</legend>
        ) : (
          props.label && <legend>{props.label}</legend>
        )}

        <div className={styles.items} style={props.itemsStyle}>
          {props.options.map(
            (option: RadioButtonGroupOption): ReactElement => (
              <label className={styles.radioButton} key={option.id}>
                <input
                  type="radio"
                  value={option.value}
                  checked={props.value === option.value}
                  disabled={props.disabled}
                  onBlur={props.onBlur}
                  onChange={props.onChange}
                />
                <span className={styles.checkmark}></span>
                <p>{option.text}</p>
              </label>
            )
          )}
        </div>
      </div>
    </div>
  );
};
