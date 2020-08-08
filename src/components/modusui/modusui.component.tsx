import React, { FC, PropsWithChildren, ReactElement, ReactNode } from 'react';

import { Theme } from '../../contexts/theme/Theme';
import { ThemeProvider } from '../../contexts/theme/theme.context';

export type ModusUIProps = {
  theme?: Theme;
} & PropsWithChildren<ReactNode>;

export const ModusUI: FC<ModusUIProps> = (
  props: ModusUIProps
): ReactElement => {
  return <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>;
};
