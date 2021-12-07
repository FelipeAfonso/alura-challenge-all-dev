import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { Hamburger } from 'assets/icons/Hamburger';
import { Search } from 'assets/icons/Search';
import Image from 'next/image';
import logoDark from 'public/logo_dark.svg';
import { useState } from 'react';
import { SearchDialog } from './SearchDialog';

export const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
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
          <Image src={logoDark} alt="All Dev logo" />
        </Grid>
        <Grid item lg={6}>
          <TextField
            label="Busque por algo"
            variant="filled"
            fullWidth
            onClick={() => setSearchOpen(true)}
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
          <Image src={logoDark} alt="All Dev logo" />
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
          <Search fill="#fff" />
        </IconButton>
        <IconButton>
          <Hamburger fill="#fff" />
        </IconButton>
      </Box>
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </AppBar>
  );
};
