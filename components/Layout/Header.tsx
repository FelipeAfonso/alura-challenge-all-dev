import {
  AppBar,
  Avatar,
  Drawer,
  Grid,
  IconButton,
  TextField,
  Tooltip,
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
import { useHotkeys } from 'react-hotkeys-hook';
import { useRecoilValue } from 'recoil';
import { SearchDialog } from './SearchDialog';
import { SidebarMenuContent } from './SidebarMenuContent';

export const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const darkMode = useRecoilValue(darkModeState);
  const logo = darkMode ? logoDark : logoLight;

  useHotkeys('f1', () => setSearchOpen(true));

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ boxShadow: 'none', px: 4, pt: 6, pb: 4 }}
    >
      <Grid container spacing={5} sx={{ display: { lg: 'flex', xs: 'none' } }}>
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
          <Tooltip title="Aperte F1 para exibir a barra de busca, e ESC para sair dela!">
            <TextField
              label="Busque por algo"
              variant="filled"
              value=""
              focused={false}
              tabIndex={0}
              fullWidth
              onClick={e => {
                e.preventDefault();
                setSearchOpen(true);
              }}
            />
          </Tooltip>
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
          tabIndex={0}
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
          PaperProps={{ sx: { px: 5, pt: 3 } }}
        >
          <SidebarMenuContent />
        </Drawer>
      </Box>
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </AppBar>
  );
};
