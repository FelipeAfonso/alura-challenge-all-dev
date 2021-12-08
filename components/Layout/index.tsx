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

export const Layout: FC = ({ children }) => {
  const layout = useRecoilValue(layoutState);
  const darkMode = useRecoilValue(darkModeState);

  const theme = darkMode ? darkTheme : lightTheme;

  const defaultLayout = (
    <>
      <Header />
      <Grid
        sx={{ display: { lg: 'flex', xs: 'none' }, px: 4 }}
        spacing={5}
        container
      >
        <Grid item lg={3}>
          <SidebarMenuContent />
        </Grid>
        {children}
      </Grid>
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
      <BackgroundProvider>{layoutDictionary[layout]}</BackgroundProvider>
    </ThemeProvider>
  );
};
