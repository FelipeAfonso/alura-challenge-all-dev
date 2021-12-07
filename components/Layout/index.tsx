import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { layoutState, LayoutStateTypes } from 'context/state/layout.atom';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { Header } from './Header';
import { SidebarMenuContent } from './SidebarMenuContent';

export const Layout: FC = ({ children }) => {
  const layout = useRecoilValue(layoutState);

  const defaultLayout = (
    <>
      <Header />
      <Grid sx={{ display: { lg: 'flex', xs: 'none' } }} container>
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

  return layoutDictionary[layout];
};
