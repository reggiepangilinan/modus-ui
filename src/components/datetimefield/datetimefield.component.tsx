import chrono from 'chrono-node';
import * as moment from 'moment';
import React, { FC, ReactElement, useState } from 'react';
/* eslint-disable @typescript-eslint/no-explicit-any */
import Select, { components as SelectComponents } from 'react-select';

import { customStyles } from '../selectfield/selectfield.customstyles';
import styles from '../selectfield/selectfield.styles.scss';

export type DateTimeFieldOption = {
  date: moment.Moment;
  value: Date;
  label: string;
  display?: string;
};

export const createOptionForDateTimeField = (d: any): DateTimeFieldOption => {
  const date = moment.isMoment(d) ? d : moment(d);
  return {
    date,
    value: date.toDate(),
    label: date.calendar(undefined, {
      sameDay: '[Today] (Do MMM YYYY)',
      nextDay: '[Tomorrow] (Do MMM YYYY)',
      nextWeek: '[Next] dddd (Do MMM YYYY)',
      lastDay: '[Yesterday] (Do MMM YYYY)',
      lastWeek: '[Last] dddd (Do MMM YYYY)',
      sameElse: 'Do MMMM YYYY'
    })
  };
};

export const defaultDateTimeFieldOptions = [
  'today',
  'tomorrow',
  'yesterday'
].map(i => createOptionForDateTimeField(chrono.parseDate(i)));

const suggestions = [
  'sunday',
  'saturday',
  'friday',
  'thursday',
  'wednesday',
  'tuesday',
  'monday',
  'december',
  'november',
  'october',
  'september',
  'august',
  'july',
  'june',
  'may',
  'april',
  'march',
  'february',
  'january',
  'yesterday',
  'tomorrow',
  'today'
].reduce((acc, str) => {
  for (let i = 1; i < str.length; i++) {
    acc[str.substr(0, i)] = str;
  }
  return acc;
}, {});

const suggest = (str: string): string =>
  str
    .split(/\b/)
    .map(i => suggestions[i] || i)
    .join('');

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const daysHeaderStyles = {
  marginTop: '5px',
  paddingTop: '5px',
  paddingBottom: '5px',
  paddingLeft: '2%',
  borderTop: '1px solid #eee',
  borderBottom: '1px solid #eee'
};
const daysHeaderItemStyles = {
  color: '#999',
  cursor: 'default',
  fontSize: '75%',
  fontWeight: 900,
  display: 'inline-block',
  width: '12%',
  margin: '0 1%'
};
const daysContainerStyles = {
  paddingTop: '5px',
  paddingLeft: '2%'
};

const Group = (props: any): ReactElement => {
  const {
    Heading,
    getStyles,
    children,
    label,
    innerProps,
    headingProps,
    cx,
    theme
  } = props;
  return (
    <div aria-label={label} style={getStyles('group', props)} {...innerProps}>
      <Heading theme={theme} getStyles={getStyles} cx={cx} {...headingProps}>
        {label}
      </Heading>
      <div style={daysHeaderStyles}>
        {days.map((day, i) => (
          <span
            key={`${i}-${day}`}
            style={{ textAlign: 'center', ...daysHeaderItemStyles }}
          >
            {day}
          </span>
        ))}
      </div>
      <div style={daysContainerStyles}>{children}</div>
    </div>
  );
};

const createCalendarOptions = (date: Date = new Date()): any => {
  // eslint-disable-next-line prefer-spread
  const daysInMonth = Array.apply(undefined, {
    length: moment(date).daysInMonth()
  }).map((_x: any, i) => {
    const d = moment(date).date(i + 1);
    return { ...createOptionForDateTimeField(d), display: 'calendar' };
  });
  return {
    label: moment(date).format('MMMM YYYY'),
    options: daysInMonth
  };
};

defaultDateTimeFieldOptions.push(createCalendarOptions());

const getOptionStyles = (defaultStyles: any): any => ({
  ...defaultStyles,
  display: 'inline-block',
  width: '12%',
  margin: '0 1%',
  textAlign: 'center',
  borderRadius: '4px'
});

const Option = (props: any): ReactElement => {
  const { data, getStyles, innerRef, innerProps } = props;
  if (data.display === 'calendar') {
    const defaultStyles = getStyles('option', props);
    const styles = getOptionStyles(defaultStyles);
    if (data.date.date() === 1) {
      const indentBy = data.date.day();
      if (indentBy) {
        styles.marginLeft = `${indentBy * 14 + 1}%`;
      }
    }
    return (
      <span {...innerProps} style={styles} ref={innerRef}>
        {data.date.format('D')}
      </span>
    );
  } else return <SelectComponents.Option {...props} />;
};

export type DateTimeFieldProps = {
  name: string;
  touched?: boolean;
  label: string;
  placeholder: string;
  error?: string;
  disabled?: boolean;
  currentValue?: DateTimeFieldOption;
  onChange?: any;
};

export const DateTimeField: FC<DateTimeFieldProps> = (
  props: DateTimeFieldProps
): ReactElement => {
  const [options, setOptions] = useState(defaultDateTimeFieldOptions);
  const displayError = props.touched && props.error;

  const handleInputChange = (value: any): any => {
    if (!value) {
      setOptions(defaultDateTimeFieldOptions);
      return;
    }
    const date = chrono.parseDate(suggest(value.toLowerCase()));
    if (date) {
      if (props.onChange) {
        setTimeout(
          () => props.onChange(createOptionForDateTimeField(date)),
          1000
        );
      }
      setOptions([
        createOptionForDateTimeField(date),
        createCalendarOptions(date)
      ]);
    } else {
      setOptions([]);
    }
  };

  const onMenuOpen = (): any => {
    if (props.currentValue) {
      setOptions([
        createOptionForDateTimeField(props.currentValue.value),
        createCalendarOptions(props.currentValue.value)
      ]);
    }
  };

  return (
    <div className={styles.selectField}>
      {displayError ? (
        <label className={styles.labelError}> {props.error} </label>
      ) : (
        <label> {props.label} </label>
      )}
      <Select
        styles={customStyles}
        isDisabled={props.disabled}
        isMulti={false}
        isClearable
        placeholder={props.placeholder}
        value={props.currentValue ? props.currentValue : null}
        components={{ Group, Option }}
        filterOption={null}
        isOptionSelected={(o, v): any => {
          return v.some(i => {
            if (i) {
              return i.date.isSame(o.date, 'day');
            }
            return false;
          });
        }}
        maxMenuHeight={380}
        options={options}
        onChange={props.onChange}
        onInputChange={(value): void => handleInputChange(value)}
        onMenuOpen={onMenuOpen}
      />
    </div>
  );
};
