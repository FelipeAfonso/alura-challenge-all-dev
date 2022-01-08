import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      '100': '#93baf9',
      light: '#78a5f8',
      main: '#5081FB',
    },
    secondary: {
      main: '#F2F2F2',
    },
    background: {
      default: '#051D3B',
      paper: '#141414',
    },
    text: {
      primary: '#F2F2F2',
      secondary: 'rgba(255, 255, 255, 0.64)',
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
          transition: 'all 0.3s ease-in-out',
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
          transition: 'all 0.3s ease-in-out',
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
    MuiTypography: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease-in-out',
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
