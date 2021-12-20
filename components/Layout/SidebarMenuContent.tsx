import { FC, useRef } from 'react';
import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { Community } from 'assets/icons/Community';
import { Box } from '@mui/system';
import { Dev } from 'assets/icons/Dev';
import { useRouter } from 'next/router';
import { AluraIconAndTextButton } from 'components/AluraIconButton';

export const SidebarMenuContent: FC<{
  drawer?: boolean;
}> = ({ drawer }) => {
  const router = useRouter();

  const AvatarDisplay = () => (
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
  );

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {!drawer && <AvatarDisplay />}
      {!drawer && (
        <Typography
          variant="caption"
          color="textPrimary"
          sx={{ letterSpacing: 5 }}
        >
          MENU
        </Typography>
      )}
      <AluraIconAndTextButton
        label="Editor"
        onClick={() => router.push('/editor')}
        data-testid="sidebar_editor"
        tabIndex={90}
        disabled={router.pathname === '/editor'}
        aria-label="Navegar para o Editor de Código"
        role="link"
        color="primary"
      >
        <Dev fontSize="small" />
      </AluraIconAndTextButton>
      <AluraIconAndTextButton
        label="Comunidade"
        onClick={() => router.push('/comunidade')}
        data-testid="sidebar_community"
        tabIndex={91}
        disabled={router.pathname === '/comunidade'}
        color="primary"
        aria-label="Navegar para a Comunidade"
        role="link"
      >
        <Community fontSize="small" />
      </AluraIconAndTextButton>
      {drawer && (
        <>
          <Divider />
          <AvatarDisplay />
        </>
      )}
    </Box>
  );
};
