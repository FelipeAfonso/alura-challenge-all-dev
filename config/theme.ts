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
  },
  typography: {
    fontFamily: 'Inter, Roboto, arial',
  },
});
