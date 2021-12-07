import {
  AppBar,
  Avatar,
  Drawer,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { Hamburger } from 'assets/icons/Hamburger';
import { Search } from 'assets/icons/Search';
import { darkModeState } from 'context/state/layout.atom';
import Image from 'next/image';
import logoDark from 'public/logo_dark.svg';
import logoLight from 'public/logo_light.svg';
import { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { SearchDialog } from './SearchDialog';
import { SidebarMenuContent } from './SidebarMenuContent';

export const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const darkMode = useRecoilValue(darkModeState);
  const logo = darkMode ? logoDark : logoLight;
  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ boxShadow: 'none', px: 4, pt: 6, pb: 1 }}
    >
      <Grid container sx={{ display: { lg: 'flex', xs: 'none' } }}>
        <Grid
          item
          lg={3}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Image src={logo} alt="All Dev logo" />
        </Grid>
        <Grid item lg={6}>
          <TextField
            label="Busque por algo"
            variant="filled"
            value=""
            focused={false}
            fullWidth
            onClick={e => {
              e.preventDefault();
              setSearchOpen(true);
            }}
          />
        </Grid>
        <Grid
          item
          lg={3}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
          gap={2}
        >
          <Avatar />
          <Typography variant="subtitle1" color="textPrimary">
            Nome
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{ display: { lg: 'none', xs: 'flex' } }}
        alignItems="center"
        gap={5}
      >
        <Box sx={{ flex: { xs: 1, sm: 'none' } }}>
          <Image src={logo} alt="All Dev logo" />
        </Box>
        <TextField
          sx={{ flex: 1, display: { xs: 'none', sm: 'block' } }}
          label="Busque por algo"
          variant="filled"
          onClick={() => setSearchOpen(true)}
          fullWidth
        />
        <IconButton
          sx={{ display: { xs: 'block', sm: 'none' } }}
          onClick={() => setSearchOpen(true)}
        >
          <Search fill="#f2f2f2" />
        </IconButton>
        <IconButton onClick={() => setDrawerOpen(true)}>
          <Hamburger fill="#f2f2f2" />
        </IconButton>
        <Drawer
          anchor="right"
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          PaperProps={{ sx: { px: 2, pt: 3 } }}
        >
          <SidebarMenuContent />
        </Drawer>
      </Box>
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </AppBar>
  );
};
