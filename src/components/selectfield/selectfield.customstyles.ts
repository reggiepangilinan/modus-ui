/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Theme } from '../../contexts/theme/Theme';

// Very hard to override style - https://github.com/JedWatson/react-select/issues/1322
//TODO: Use js object variable for color later on with theme
export const customStyles = (theme: Theme, menuMaxWidth?: string): any => {
  return {
    control: (base: any) => ({
      ...base,
      minHeight: 32,
      borderRadius: '3px',
      border: `1px solid ${theme.colors.neutralD1}`, //Neutral Color D1

      boxShadow: '0 0 0 1px #99999', //Neutral Color D1
      '&:hover': {
        border: '1px solid #31465f' //Brand Primary Color
      },

      '&:active': {
        border: '1px solid #31465f' //Brand Primary Color
      },

      '&:disabled': {
        backgroundColor: '#eeeeee', //Neutral Color L1
        color: '#666666', //Neutral Color D2,
        cursor: 'not-allowed'
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
    }),
    option: (base, state) => ({
      ...base,
      color: state.isSelected ? '#fffff' : '#333333', //Neutral Color L4 + Neutral Color D4

      backgroundColor: state.isFocused ? '#ffab2e' : '#ffff',
      ':hover': {
        backgroundColor: '#ffba54'
      }
    }),
    menu: (base: any) => ({
      ...base,
      maxWidth: menuMaxWidth ? menuMaxWidth : undefined,
      zIndex: 600 // Follow the proximity guide
    })
  };
};
