import { Grid, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import { darkTheme } from 'config/darkTheme';
import { lightTheme } from 'config/lightTheme';
import {
  darkModeState,
  layoutState,
  LayoutStateTypes,
} from 'context/state/layout.atom';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { BackgroundProvider } from './BackgroundProvider';
import { Header } from './Header';
import { SidebarMenuContent } from './SidebarMenuContent';
import { SnackbarProvider } from './SnackbarProvider';

export const Layout: FC<{ testMode?: boolean }> = ({ children, testMode }) => {
  const layout = useRecoilValue(layoutState);
  const darkMode = useRecoilValue(darkModeState);

  const theme = darkMode ? darkTheme : lightTheme;

  // this component is controlled by the layout state
  // and also serves the function of controlling the
  // app theme

  const defaultLayout = (
    <>
      <Header />
      <Grid
        sx={{
          display: { lg: 'flex', xs: 'none' },
          px: 4,
        }}
        spacing={5}
        container
      >
        <Grid item lg={3}>
          <SidebarMenuContent />
        </Grid>
        {children}
      </Grid>
      <SnackbarProvider />
      <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>{children}</Box>
    </>
  );

  const noneLayout = <>{children}</>;

  const layoutDictionary: Record<LayoutStateTypes, JSX.Element> = {
    default: defaultLayout,
    none: noneLayout,
  };

  return (
    <ThemeProvider theme={theme}>
      <BackgroundProvider>
        {testMode ? defaultLayout : layoutDictionary[layout]}
      </BackgroundProvider>
    </ThemeProvider>
  );
};
