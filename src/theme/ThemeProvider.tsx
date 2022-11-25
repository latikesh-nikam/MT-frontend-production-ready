import { createTheme, ThemeProvider } from '@mui/material/styles';
import { appTheme } from './ThemeProvider.data';
import { IMuiThemeProviderProps } from './ThemeProvider.types';

const MuiThemeProvider = ({ children }: IMuiThemeProviderProps) => {
  const theme = createTheme(appTheme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
