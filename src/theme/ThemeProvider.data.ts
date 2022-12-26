import { newPalette } from './newPallete';

export const appTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
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
    fontSizeLarger: '1.75rem',
    fontSizeLargest: '2rem',
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
    smaller: 2,
    primary: 8,
    main: 16,
    secondary: 20,
    oneForth: 4,
    larger: 32,
  },
  gap: {
    primary: 8,
    main: 16,
    secondary: 20,
    tworem: 32,
    small: 4,
    large: 48,
    larger: 32,
  },
  borderRadius: {
    small: 4,
    primary: 8,
    main: 16,
    secondary: 20,
    larger: 32,
  },
  margin: {
    primary: 8,
    main: 16,
    secondary: 20,
    oneForth: 5,
    medium: 40,
    large: 24,
    larger: 128,
    largest: 384,
    berthBottom: 80,
    berthLeft: 64,
    seatLeft: 180,
    twoRem: 32,
  },
  width: {
    primary: 128,
    main: 400,
    medium: 300,
    secondary: 530,
    small: 32,
    smaller: 10,
    oneRem: 16,
    new: 250,
  },
  height: {
    oneRem: 16,
    small: 70,
    medium: 120,
    large: 160,
    larger: 240,
    largest: 448,
  },
  top: {
    small: 4,
    large: 32,
    larger: 96,
    medium: 16,
  },
  left: {
    primary: 128,
    small: 4,
    medium: 32,
    large: 354,
    secondary: 16,
  },
  lineHeight: {
    primary: 30,
  },
};
