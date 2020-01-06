/* eslint-disable @typescript-eslint/no-explicit-any */
import './selectfield.global.scss';

import React, { FunctionComponent, ReactElement } from 'react';
import Select from 'react-select';

import { customStyles } from './selectfield.customstyles';
import styles from './selectfield.styles.scss';

export type SelectFieldOption = {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
};

type Props = {
  name: string;
  touched?: boolean;
  label: string;
  placeholder: string;
  error?: string;
  disabled?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  multi?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentValue?: any;
  options: SelectFieldOption[];
  onChange?: any;
};

export const SelectField: FunctionComponent<Props> = (
  props: Props
): ReactElement => {
  const displayError = props.touched && props.error;
  return (
    <div className={styles.selectField}>
      {displayError ? (
        <label className={styles.labelError}> {props.error} </label>
      ) : (
        <label> {props.label} </label>
      )}
      <Select
        className={`react-select-override-style`}
        classNamePrefix={'select-prefix'}
        styles={customStyles}
        isDisabled={props.disabled}
        isSearchable={props.searchable}
        isClearable={props.clearable}
        isMulti={props.multi}
        placeholder={props.placeholder}
        value={props.currentValue ? props.currentValue : null}
        options={props.options}
        onChange={props.onChange}
      />
    </div>
  );
};
