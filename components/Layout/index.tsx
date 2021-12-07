import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Header } from './Header';
import { SidebarMenuContent } from './SidebarMenuContent';

export const Layout = () => {
  return (
    <>
      <Header />
      <Grid sx={{ display: { lg: 'flex', xs: 'none' } }} container>
        <Grid item lg={3}>
          <SidebarMenuContent />
        </Grid>
      </Grid>
      <Box sx={{ display: { xs: 'flex', lg: 'none' } }}></Box>
    </>
  );
};
