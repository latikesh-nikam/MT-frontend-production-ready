import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { appTheme } from './ThemeProvider.data';
import { IMuiThemeProviderProps } from './ThemeProvider.types';

const MuiThemeProvider = ({ children }: IMuiThemeProviderProps) => {
  const theme = createTheme(appTheme as ThemeOptions);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const MuiThemeProvider = ({ children }: IMuiThemeProviderProps) => {
  const theme = createTheme(appTheme as ThemeOptions);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
