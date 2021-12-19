import { Avatar, IconButton, List, ListItem, Typography } from '@mui/material';
import { Community } from 'assets/icons/Community';
import { Box } from '@mui/system';
import { Dev } from 'assets/icons/Dev';
import { useRouter } from 'next/router';
import { AluraIconButton } from 'components/AluraIconButton';

export const SidebarMenuContent = () => {
  const router = useRouter();
  return (
    <List sx={{ py: 0 }}>
      <Box
        sx={{ display: { lg: 'none', xs: 'flex' } }}
        alignItems="center"
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
        sx={{ letterSpacing: 5 }}
      >
        MENU
      </Typography>
      <ListItem
        onClick={() => router.push('/editor')}
        data-testid="sidebar_editor"
        tabIndex={90}
        sx={{ cursor: 'pointer', px: 0 }}
      >
        <AluraIconButton
          disabled={router.pathname === '/editor'}
          aria-label="Navegar para o Editor de Código"
          role="link"
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
        data-testid="sidebar_community"
        tabIndex={91}
        sx={{ cursor: 'pointer', px: 0 }}
      >
        <AluraIconButton
          disabled={router.pathname === '/comunidade'}
          color="primary"
          aria-label="Navegar para a Comunidade"
          role="link"
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
