import { FC } from 'react';
import { Avatar, Button, Divider, Stack, Typography } from '@mui/material';
import { Community } from 'assets/icons/Community';
import { Box } from '@mui/system';
import { Dev } from 'assets/icons/Dev';
import { useRouter } from 'next/router';
import { AluraIconAndTextButton } from 'components/AluraIconButton';
import { useRecoilState } from 'recoil';
import { darkModeState } from 'context/state/layout.atom';
import { authState } from 'context/state/auth.atom';
import { DarkMode } from 'assets/icons/DarkMode';
import { Logout } from 'assets/icons/Logout';
import { logout } from 'context/api/auth';

export const SidebarMenuContent: FC<{
  drawer?: boolean;
}> = ({ drawer }) => {
  // this controls the sidebar content, and
  // the same problem with the header component
  // is observed here

  const router = useRouter();
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const [auth, setAuth] = useRecoilState(authState);

  const AvatarDisplay = () =>
    auth ? (
      <Button
        variant="text"
        sx={{
          textTransform: 'none',
          display: { lg: 'none', xs: 'flex' },
          justifyContent: 'start',
        }}
        startIcon={<Avatar sx={{ width: 24, height: 24 }} src={auth!.picUrl} />}
      >
        <Typography variant="body1" color="textPrimary">
          {auth!.userName.split(' ')[0].slice(0, 12)}
        </Typography>
      </Button>
    ) : (
      <Button
        variant="text"
        onClick={() => {
          router.push('/login');
        }}
      >
        Login
      </Button>
    );

  const Options = () => (
    <Stack>
      <Button
        variant="text"
        color="secondary"
        sx={{
          textTransform: 'none',
          justifyContent: 'start',
        }}
        startIcon={<DarkMode />}
        onClick={() => setDarkMode(!darkMode)}
      >
        Dark Mode
      </Button>
      <Button
        variant="text"
        color="secondary"
        sx={{
          textTransform: 'none',
          justifyContent: 'start',
        }}
        startIcon={<Logout />}
        onClick={() => {
          logout();
          setAuth(undefined);
        }}
      >
        Logout
      </Button>
    </Stack>
  );

  return (
    <Box display="flex" flexDirection="column" gap={2}>
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
        disabled={router.asPath === '/editor'}
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
        disabled={router.asPath === '/comunidade'}
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
          <Options />
        </>
      )}
    </Box>
  );
};
