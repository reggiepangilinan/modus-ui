/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// Very hard to override style - https://github.com/JedWatson/react-select/issues/1322
export const customStyles: any = {
  control: (base: any) => ({
    ...base,
    minHeight: 32,
    borderRadius: '3px',
    border: '1px solid #999999',

    boxShadow: '0 0 0 1px #99999',
    '&:hover': {
      border: '1px solid #31465f'
    },

    '&:active': {
      border: '1px solid #31465f'
    }
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    padding: 4
  }),
  clearIndicator: (base: any) => ({
    ...base,
    padding: 4
  }),
  multiValue: (base: any) => ({
    ...base
  }),
  valueContainer: (base: any) => ({
    ...base,
    padding: '0px 6px'
  }),
  input: (base: any) => ({
    ...base,
    margin: 0,
    padding: 0
  })
};
