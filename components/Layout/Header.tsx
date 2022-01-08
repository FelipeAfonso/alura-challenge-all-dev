import {
  AppBar,
  Avatar,
  Button,
  Drawer,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { Close } from 'assets/icons/Close';
import { DarkMode } from 'assets/icons/DarkMode';
import { Hamburger } from 'assets/icons/Hamburger';
import { Logout } from 'assets/icons/Logout';
import { Search } from 'assets/icons/Search';
import { logout } from 'context/api/auth';
import { authState } from 'context/state/auth.atom';
import { darkModeState } from 'context/state/layout.atom';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logoDark from 'public/logo_dark.svg';
import logoLight from 'public/logo_light.svg';
import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useRecoilState } from 'recoil';
import { SearchDialog } from './SearchDialog';
import { SidebarMenuContent } from './SidebarMenuContent';

export const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState<HTMLElement | null>(null);
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const [auth, setAuth] = useRecoilState(authState);
  const logo = darkMode ? logoDark : logoLight;
  useHotkeys('f1', () => setSearchOpen(true));
  const router = useRouter();
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
              inputProps={{
                'data-testid': 'search_box_textfield_lg',
              }}
              aria-label="Busque por algo"
              role="searchbox"
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
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
          }}
        >
          {auth?.token ? (
            <>
              <Button
                variant="text"
                sx={{ textTransform: 'none' }}
                onClick={e => {
                  if (!userMenuOpen) setUserMenuOpen(e.currentTarget);
                  else setUserMenuOpen(null);
                }}
              >
                <Box
                  gap={2}
                  p={1}
                  display="flex"
                  alignItems="center"
                  flexDirection="row"
                >
                  <Avatar sx={{ width: 32, height: 32 }} src={auth!.picUrl} />
                  <Typography variant="subtitle1" color="textPrimary">
                    {auth!.userName.split(' ')[0].slice(0, 12)}
                  </Typography>
                </Box>
                <Menu
                  open={Boolean(userMenuOpen)}
                  onClose={() => {
                    setUserMenuOpen(null);
                  }}
                  anchorEl={userMenuOpen}
                >
                  <MenuItem onClick={() => setDarkMode(!darkMode)}>
                    <ListItemIcon>
                      <DarkMode />
                    </ListItemIcon>
                    Dark Mode
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      logout();
                      setAuth(undefined);
                    }}
                  >
                    <ListItemIcon>
                      <Logout />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Button>
            </>
          ) : (
            <Button
              variant="text"
              onClick={() => {
                router.push('/login');
              }}
            >
              Login
            </Button>
          )}
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
          inputProps={{
            'data-testid': 'search_box_textfield_sm',
          }}
          aria-label="Busque por algo"
          role="searchbox"
          variant="filled"
          tabIndex={0}
          onClick={() => setSearchOpen(true)}
          fullWidth
        />
        <IconButton
          sx={{ display: { xs: 'block', sm: 'none' } }}
          data-testid="search_icon_button"
          aria-label="Busque por algo"
          role="search"
          onClick={() => setSearchOpen(true)}
        >
          <Search />
        </IconButton>
        <IconButton
          sx={{ width: 48, height: 48 }}
          onClick={() => setDrawerOpen(true)}
        >
          {drawerOpen ? <Close /> : <Hamburger />}
        </IconButton>
        <Drawer
          anchor="right"
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          PaperProps={{
            elevation: 0,
            sx: {
              mt: {
                xs: '126px',
                sm: '136px',
              },
              px: 5,
              pt: 3,
              borderRadius: 2,
              bgcolor: {
                xs: '#2b415a !important',
                lg: 'transparent',
              },
            },
          }}
          BackdropProps={{
            sx: {
              bgcolor: 'transparent',
            },
          }}
        >
          <SidebarMenuContent drawer />
        </Drawer>
      </Box>
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </AppBar>
  );
};
