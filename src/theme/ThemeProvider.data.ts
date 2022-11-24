import { ThemeOptions } from "@mui/material/styles/createTheme";
import { newPalette } from "./newPallete";

export const appTheme: ThemeOptions = {
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      },
    },

    palette: newPalette,
    typography: {
      fontFamily: ['Noto Sans'].join(','),
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
        letterSpacing: '1px',
        textTransform: 'uppercase',
      },
      subtitle1: {
        fontSize: '0.85rem',
        fontWeight: 400,
        lineHeight: 1.286,
        letterSpacing: '0',
        textAlign: 'left',
      },
      subtitle2: {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: '0.5px',
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
        fontSize: '0.95rem',
        fontWeight: '500',
        textTransform: 'none',
      },
      overline: {
        fontSize: '0.625rem',
        fontWeight: 400,
        lineHeight: 1.4,
        letterSpacing: '0.5px',
      },
    },
  }