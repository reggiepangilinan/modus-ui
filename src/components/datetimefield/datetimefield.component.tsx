import chrono from 'chrono-node';
import moment from 'moment';
import React, { FC, ReactElement, useEffect, useState } from 'react';
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

const defaultDateFormat = 'MMM DD, YYYY';
const defaultTimeFormat = 'hh:mm A';

export const createOptionForDateTimeField = (
  d: any,
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  hideTime: boolean = false,
  dateFormat: string = defaultDateFormat,
  timeFormat: string = defaultTimeFormat
): DateTimeFieldOption => {
  const date = moment.isMoment(d) ? d : moment(d);
  return {
    date,
    value: date.toDate(),
    label: date.calendar(undefined, {
      sameDay: `[Today] - ${
        hideTime ? dateFormat : `${dateFormat} ${timeFormat}`
      }`,
      nextDay: `[Tomorrow] - ${
        hideTime ? dateFormat : `${dateFormat} ${timeFormat}`
      }`,
      nextWeek: `[Next] dddd - ${
        hideTime ? dateFormat : `${dateFormat} ${timeFormat}`
      }`,
      lastDay: `[Yesterday] - ${
        hideTime ? dateFormat : `${dateFormat} ${timeFormat}`
      }`,
      lastWeek: `[Last] dddd - ${
        hideTime ? dateFormat : `${dateFormat} ${timeFormat}`
      }`,
      sameElse: hideTime ? dateFormat : `${dateFormat} ${timeFormat}`
    })
  };
};
const dedupe = (arr: any[]): any[] => {
  return arr.filter(
    (elem, index, self) =>
      self.findIndex(t => {
        return t.label === elem.label;
      }) === index
  );
};

const setCurrentDateFieldOptions = (
  dates: string[],
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  hideTime: boolean = false,
  dateFormat: string = defaultDateFormat,
  timeFormat: string = defaultTimeFormat
): DateTimeFieldOption[] => {
  const dateTimeOptions = dates.map(i =>
    createOptionForDateTimeField(
      chrono.parseDate(i),
      hideTime,
      dateFormat,
      timeFormat
    )
  );
  return dedupe(dateTimeOptions);
};

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
  fontSize: '85%',
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
      <Heading
        theme={theme}
        getStyles={getStyles}
        style={{ fontSize: '120%', fontWeight: 900, marginTop: '20px' }}
        cx={cx}
        {...headingProps}
      >
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

const createCalendarOptions = (
  date: Date = new Date(),
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  hideTime: boolean = false,
  dateFormat: string = defaultDateFormat,
  timeFormat: string = defaultTimeFormat
): any => {
  // eslint-disable-next-line prefer-spread
  const daysInMonth = Array.apply(undefined, {
    length: moment(date).daysInMonth()
  }).map((_x: any, i) => {
    const d = moment(date).date(i + 1);
    return {
      ...createOptionForDateTimeField(d, hideTime, dateFormat, timeFormat),
      display: 'calendar'
    };
  });
  return {
    label: moment(date).format('MMMM YYYY'),
    options: daysInMonth
  };
};

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
  label: string;
  placeholder: string;
  /**
   * Override the default date format. e.g. DD/MM/YYYY, MM/DD/YYYY
   */
  dateFormat?: string;
  /**
   * Override the default time format. e.g. hh:mm A, H.mm
   */
  timeFormat?: string;
  /**
   * Hides the time part of the date
   */
  hideTime?: boolean;
  touched?: boolean;
  error?: string;
  disabled?: boolean;
  currentValue?: DateTimeFieldOption;
  onChange?: any;
};

export const DateTimeField: FC<DateTimeFieldProps> = (
  props: DateTimeFieldProps
): ReactElement => {
  const currentDateFormat = props.dateFormat
    ? props.dateFormat
    : defaultDateFormat;
  const currentDateFieldOptions = setCurrentDateFieldOptions(
    ['today', 'tomorrow', 'yesterday'],
    props.hideTime ? props.hideTime : false,
    currentDateFormat,
    props.timeFormat ? props.timeFormat : defaultTimeFormat
  );

  currentDateFieldOptions.push(
    createCalendarOptions(
      props.currentValue ? props.currentValue.value : new Date(),
      props.hideTime,
      props.dateFormat,
      props.timeFormat
    )
  );

  const [options, setOptions] = useState(currentDateFieldOptions);
  const displayError = props.touched && props.error;
  useEffect(() => {
    if (props.currentValue) {
      setOptions([
        createOptionForDateTimeField(
          props.currentValue.value,
          props.hideTime,
          props.dateFormat,
          props.timeFormat
        ),
        createCalendarOptions(
          props.currentValue.value,
          props.hideTime,
          props.dateFormat,
          props.timeFormat
        )
      ]);
    }
  }, [props.currentValue]);

  const handleInputChange = (value: any): any => {
    if (!value) {
      setOptions(currentDateFieldOptions);
      return;
    }
    const date = chrono.parseDate(suggest(value.toLowerCase()));
    if (date) {
      setOptions([
        createOptionForDateTimeField(
          date,
          props.hideTime,
          props.dateFormat,
          props.timeFormat
        ),
        createCalendarOptions(
          date,
          props.hideTime,
          props.dateFormat,
          props.timeFormat
        )
      ]);
    } else {
      setOptions([]);
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
        value={props.currentValue}
        components={{ Group, Option }}
        filterOption={null}
        isOptionSelected={(value, options): boolean => {
          const selected = options.some(
            i =>
              i.date.format(currentDateFormat) ===
              value.date.format(currentDateFormat)
          );
          // if (selected) {
          //   console.log(value);
          //   console.log(options);
          //   console.log(selected);
          // }

          return selected;
        }}
        maxMenuHeight={425}
        options={options}
        onChange={props.onChange}
        onInputChange={handleInputChange}
      />
    </div>
  );
};
