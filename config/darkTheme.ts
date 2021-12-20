import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      '100': '#96B9FD',
      light: '#7BA4FC',
      main: '#5081FB',
    },
    background: {
      default: '#051D3B',
      paper: '#141414',
    },
    text: {
      primary: '#F2F2F2',
      secondary: '#A6A2A2',
      disabled: '#A6A2A2',
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
          backgroundColor: 'rgb(255,255,255, 0.16)',
          '&:hover': {
            borderRadius: 10,
            backgroundColor: 'rgb(255,255,255, 0.24)',
          },
          '&.Mui-focused': {
            borderRadius: 10,
            backgroundColor: 'rgb(255,255,255, 0.24)',
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
          '&.Mui-focused': {
            backgroundColor: 'primary.light',
          },
        },
      },
    },
  },
});
