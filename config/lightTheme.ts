import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      '100': '#96B9FD',
      light: '#7BA4FC',
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
  },
  components: {
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: 'rgb(0,0,0, 0.16)',
          '&:hover': {
            borderRadius: 10,
            backgroundColor: 'rgb(0,0,0, 0.24)',
          },
          '&.Mui-focused': {
            borderRadius: 10,
            backgroundColor: 'rgb(0,0,0, 0.24)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            backgroundColor: '#5081FB29 !important',
          },
        },
      },
    },
  },
});
