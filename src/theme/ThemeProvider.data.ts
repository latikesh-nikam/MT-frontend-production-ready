import { newPalette } from './newPallete';

export const appTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 410,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },

  palette: newPalette,
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,

    fontSizeSmaller: '0.5rem',
    fontSizeSmall: '0.75rem',
    fontSizeRegular: '1rem',
    fontSizeMedium: '1.25rem',
    fontSizeLarge: '1.5rem',

    h1: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '0.15000000596046448px',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: '0.15000000596046448px',
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: '-0.20000000298023224px',
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.33,
    },
    h5: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.714,
      letterSpacing: '0.15000000596046448px',
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.714,
      letterSpacing: '0.064rem',
      textTransform: 'uppercase',
    },
    subtitle1: {
      fontSize: '0.8rem',
      fontWeight: 400,
      lineHeight: 1.286,
      letterSpacing: '0',
      textAlign: 'left',
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.04rem',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.375,
      letterSpacing: '0.15000000596046448px',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.429,
      letterSpacing: '0.15000000596046448px',
    },
    button: {
      fontFamily: 'inherit',
      fontSize: '1rem',
      fontWeight: '500',
      textTransform: 'none',
    },
    overline: {
      fontSize: '0.625rem',
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: '0.04rem',
    },
  },
  padding: {
    small: 4,
    primary: 8,
    main: 16,
    secondary: 20,
    larger: 32,
  },
  gap: {
    small: 4,
    primary: 8,
    main: 16,
    secondary: 20,
    larger: 32,
  },
  borderRadius: {
    small: 4,
    primary: 8,
    main: 16,
    secondary: 20,
    larger: 32,
  },
};
