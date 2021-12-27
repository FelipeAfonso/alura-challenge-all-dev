import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      '100': '#93baf9',
      light: '#78a5f8',
      main: '#5081FB',
    },
    background: {
      default: '#F2F2F2',
    },
    text: {
      primary: '#141414',
      secondary: '#868282',
      disabled: '#868282',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, arial',
    caption: {
      fontSize: 12,
      lineHeight: '18px',
    },
    body1: {
      fontSize: 16,
      lineHeight: '24px',
    },
    subtitle1: {
      fontSize: 21,
      lineHeight: '32px',
    },
    subtitle2: {
      fontSize: 21,
      lineHeight: '32px',
      fontWeight: 700,
    },
  },
  components: {
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: '#FFFFFF29',
          '&:hover': {
            borderRadius: 10,
            backgroundColor: '#FFFFFF3D',
          },
          '&.Mui-focused': {
            borderRadius: 10,
            backgroundColor: '#FFFFFF3D',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            backgroundColor: '#5081FB !important',
            color: '#fff',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          borderRadius: 8,
          '&:hover': {
            backgroundColor: '#78a5f8',
          },
          '&.Mui-focused': {
            backgroundColor: '#93baf9',
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
  },
});
