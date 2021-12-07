import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
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
  },
});
