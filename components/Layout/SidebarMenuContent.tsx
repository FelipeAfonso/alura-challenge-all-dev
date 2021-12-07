import { Avatar, IconButton, List, ListItem, Typography } from '@mui/material';
import { Community } from 'assets/icons/Community';
import { Box } from '@mui/system';
import { Dev } from 'assets/icons/Dev';

export const SidebarMenuContent = () => {
  return (
    <List>
      <Box
        sx={{ display: { lg: 'none', xs: 'flex' } }}
        alignItems="center"
        gap={2}
        my={2}
        mx={2}
      >
        <Avatar />
        <Typography variant="body1" color="textPrimary">
          Nome
        </Typography>
      </Box>
      <Typography
        variant="caption"
        color="textPrimary"
        sx={{ letterSpacing: 5, mx: 2 }}
      >
        MENU
      </Typography>
      <ListItem>
        <IconButton
          sx={{
            bgcolor: 'primary.main',
            borderRadius: 3,
            p: 1.3,
            '&:hover': { bgcolor: 'primary.light' },
          }}
          color="primary"
        >
          <Dev fill="#fff" fontSize="small" />
        </IconButton>
        <Typography color="textPrimary" sx={{ mx: 2 }}>
          Editor
        </Typography>
      </ListItem>
      <ListItem>
        <IconButton
          sx={{
            bgcolor: 'primary.main',
            borderRadius: 3,
            p: 1.3,
            '&:hover': { bgcolor: 'primary.light' },
          }}
          color="primary"
        >
          <Community fill="#fff" fontSize="small" />
        </IconButton>
        <Typography color="textPrimary" sx={{ mx: 2 }}>
          Comunidade
        </Typography>
      </ListItem>
    </List>
  );
};
