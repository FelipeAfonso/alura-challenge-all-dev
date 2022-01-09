import { Button, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { login } from 'context/api/auth';
import { authState } from 'context/state/auth.atom';
import { useLayout } from 'hooks/useLayout';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRecoilState, useRecoilValue } from 'recoil';
import logoDark from 'public/logo_dark.svg';
import logoLight from 'public/logo_light.svg';
import { darkModeState } from 'context/state/layout.atom';
import Image from 'next/image';
import { Google } from 'assets/icons/Google';
import { Github } from 'assets/icons/Github';
import { useRouter } from 'next/router';
import { Arrow } from 'assets/icons/Arrow';

const Login: NextPage = () => {
  useLayout('none');
  const darkMode = useRecoilValue(darkModeState);
  const logo = darkMode ? logoDark : logoLight;
  const [auth, setAuth] = useRecoilState(authState);
  const router = useRouter();

  if (auth?.token) router.push('/editor');

  return (
    <>
      <Head>
        <meta name="author" content="Felipe Afonso" />
        <meta
          property="og:image"
          content="https://alura-challenge-all-dev.vercel.app/aluraDevEmbedabble.jpg"
        />
        <meta property="og:title" content="Login Alura Dev" />
        <meta
          property="og:description"
          content="Faça o login para divulgar seus códigos em nossa comunidade"
        />
        <title>Login Alura Dev</title>
      </Head>
      <Button
        sx={{ position: 'absolute', top: 15, left: 15 }}
        onClick={() => router.back()}
        startIcon={<Arrow />}
      >
        Retornar
      </Button>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Stack gap={2}>
          <Box display="block" minWidth={250} mb={2} width="25vw">
            <Image src={logo} alt="All Dev logo" layout="responsive" />
          </Box>
          <Typography
            variant="body1"
            color="textPrimary"
            sx={{ minWidth: 250, maxWidth: '25vw' }}
          >
            Entre para a comunidade AluraDev! É só entrar com uma de suas
            contas:
          </Typography>
          <Button
            data-testid="button_login_google"
            variant="contained"
            startIcon={<Google />}
            fullWidth
            onClick={() => {
              login('google').then(u => {
                if (typeof u === 'string' || u instanceof String)
                  console.error('login error');
                else {
                  setAuth({
                    userName: u.displayName ?? u.email ?? '',
                    picUrl: u.photoURL ?? '',
                    token: u.refreshToken,
                  });
                }
              });
            }}
          >
            Login com o Google
          </Button>
          <Button
            data-testid="button_login_github"
            variant="contained"
            startIcon={<Github />}
            fullWidth
            onClick={() => {
              login('github').then(u => {
                if (typeof u === 'string' || u instanceof String)
                  console.error('login error');
                else {
                  setAuth({
                    userName: u.displayName ?? u.email ?? '',
                    picUrl: u.photoURL ?? '',
                    token: u.refreshToken,
                  });
                }
              });
            }}
          >
            Login com o Github
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Login;
