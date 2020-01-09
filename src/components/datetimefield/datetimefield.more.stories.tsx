import React, { ReactElement, useState } from 'react';

import {
  DateTimeField,
  DateTimeFieldOption
} from '../datetimefield/datetimefield.component';

export const DateTimeFieldControlled = (): ReactElement => {
  const [state, setstate] = useState<DateTimeFieldOption>();
  return (
    <DateTimeField
      name="dateTimeFieldControlled"
      onChange={(dateTimeFieldOption: DateTimeFieldOption): void => {
        setstate(dateTimeFieldOption);
      }}
      label="This is a controlled date time field"
      placeholder="MM/DD/YYYY"
      currentValue={state}
    />
  );
};
