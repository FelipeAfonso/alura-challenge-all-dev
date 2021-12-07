import { Avatar, IconButton, List, ListItem, Typography } from '@mui/material';
import { Community } from 'assets/icons/Community';
import { Box } from '@mui/system';
import { Dev } from 'assets/icons/Dev';
import { useRouter } from 'next/router';
import { AluraIconButton } from 'components/AluraIconButton';

export const SidebarMenuContent = () => {
  const router = useRouter();
  return (
    <List sx={{ mx: 2, py: 0 }}>
      <Box
        sx={{ display: { lg: 'none', xs: 'flex' } }}
        alignItems="center"
        mx={2}
        my={2}
        gap={2}
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
      <ListItem
        onClick={() => router.push('/editor')}
        sx={{ cursor: 'pointer' }}
      >
        <AluraIconButton
          disabled={router.pathname === '/editor'}
          color="primary"
        >
          <Dev
            fill={router.pathname === '/editor' ? '#a6a2a2' : '#f2f2f2'}
            fontSize="small"
          />
        </AluraIconButton>
        <Typography color="textPrimary" sx={{ mx: 2 }}>
          Editor
        </Typography>
      </ListItem>
      <ListItem
        onClick={() => router.push('/comunidade')}
        sx={{ cursor: 'pointer' }}
      >
        <AluraIconButton
          disabled={router.pathname === '/comunidade'}
          color="primary"
        >
          <Community
            fill={router.pathname === '/comunidade' ? '#a6a2a2' : '#f2f2f2'}
            fontSize="small"
          />
        </AluraIconButton>
        <Typography color="textPrimary" sx={{ mx: 2 }}>
          Comunidade
        </Typography>
      </ListItem>
    </List>
  );
};
