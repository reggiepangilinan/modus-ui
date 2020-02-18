import React, {
  CSSProperties,
  FunctionComponent,
  ReactElement,
  useState
} from 'react';

import {
  RadioButtonGroup,
  RadioButtonGroupOption
} from '../../radiobuttongroup/radiobuttongroup.component';

const options: RadioButtonGroupOption[] = [
  { id: 'hot', text: 'This is Hot', value: 'hot' },
  { id: 'cold', text: 'This is Cold', value: 'cold' }
];

export type BaseStoryProps = {
  disabled?: boolean;
  label?: string;
  touched?: boolean;
  error?: string;
  value?: string | number;
  itemsStyle?: CSSProperties;
};

export const BaseStory: FunctionComponent<BaseStoryProps> = (
  props: BaseStoryProps
): ReactElement => {
  const [value, setvalue] = useState();
  return (
    <RadioButtonGroup
      label={props.label}
      disabled={props.disabled}
      options={options}
      touched={props.touched}
      error={props.error}
      itemsStyle={props.itemsStyle}
      value={props.value ? props.value : value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
        setvalue(e.target.value);
      }}
    />
  );
};
