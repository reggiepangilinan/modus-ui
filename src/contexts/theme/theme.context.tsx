import React, {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

import { lightTheme } from './lightTheme';
import { Theme } from './Theme';

type ThemeProviderProps = { theme: Theme } & PropsWithChildren<ReactNode>;

export type ThemeContextState = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextState>({
  theme: lightTheme
} as ThemeContextState);

const useTheme = (): ThemeContextState => {
  return useContext<ThemeContextState>(ThemeContext);
};

const renderStyle = (theme: Theme): ReactNode => (
  <style>
    {`
  :root {
    --brand-primary-color-d2: ${theme.colors.brandPrimaryD2};
    --brand-primary-color-d1: ${theme.colors.brandPrimaryD1};
    --brand-primary-color: ${theme.colors.brandPrimary};
    --brand-primary-color-l1: ${theme.colors.brandPrimaryL1};
    --brand-primary-color-l2: ${theme.colors.brandPrimaryL2};

    --brand-secondary-color-d2: ${theme.colors.brandSecondaryD2};
    --brand-secondary-color-d1: ${theme.colors.brandSecondaryD1};
    --brand-secondary-color: ${theme.colors.brandSecondary};
    --brand-secondary-color-l1: ${theme.colors.brandSecondaryL1};
    --brand-secondary-color-l2: ${theme.colors.brandSecondaryL2};

    --success-color-d1: ${theme.colors.successD1};
    --success-color: ${theme.colors.success};
    --success-color-l1: ${theme.colors.successL1};

    --info-color-d1: ${theme.colors.infoD1};
    --info-color: ${theme.colors.info};
    --info-color-l1: ${theme.colors.infoL1};

    --warning-color-d1: ${theme.colors.warningD1};
    --warning-color: ${theme.colors.warning};
    --warning-color-l1: ${theme.colors.warningL1};

    --error-color-d1: ${theme.colors.errorD1};
    --error-color: ${theme.colors.error};
    --error-color-l1: ${theme.colors.errorL1};

    --text-color-primary: ${theme.colors.textPrimary}; 
    --text-color-primary-disabled: ${theme.colors.textPrimaryDisabled}; 
    --text-color-brand: ${theme.colors.textBrand}; 
    --text-color-brand-disabled: ${theme.colors.textBrandDisabled}; 

    --neutral-color-d4: ${theme.colors.neutralD4};
    --neutral-color-d3: ${theme.colors.neutralD3};
    --neutral-color-d2: ${theme.colors.neutralD2};
    --neutral-color-d1: ${theme.colors.neutralD1};
    --neutral-color: ${theme.colors.neutral};
    --neutral-color-l1: ${theme.colors.neutralL1};
    --neutral-color-l2: ${theme.colors.neutralL2};
    --neutral-color-l3: ${theme.colors.neutralL3};
    --neutral-color-l4: ${theme.colors.neutralL4};
  }
`}
  </style>
);

const ThemeProvider = (props: ThemeProviderProps): ReactElement => {
  const [theme, setTheme] = useState<Theme>(
    props.theme
      ? {
          type: props.theme.type,
          colors: { ...lightTheme.colors, ...props.theme.colors }
        }
      : lightTheme
  );

  useEffect(() => {
    // eslint-disable-next-line no-console
    //console.log(theme);
  }, [theme]);

  return (
    <>
      {renderStyle(theme)}
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
};

export { ThemeProvider, useTheme };
