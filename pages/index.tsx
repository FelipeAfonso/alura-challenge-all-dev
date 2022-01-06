import { Button, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { login } from 'context/api/auth';
import { authState } from 'context/state/auth.atom';
import { useLayout } from 'hooks/useLayout';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRecoilState } from 'recoil';

const Home: NextPage = () => {
  useLayout('none');
  const [auth, setAuth] = useRecoilState(authState);
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
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Stack>
          <Button
            onClick={() => {
              const user = login().then(u => {
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
          <Button onClick={() => console.log(auth)}>print state</Button>
          <Link href="/comunidade" passHref>
            <Typography sx={{ cursor: 'pointer' }} align="center" variant="h1">
              Comunidade
            </Typography>
          </Link>
          <Link href="/editor" passHref>
            <Typography sx={{ cursor: 'pointer' }} align="center" variant="h1">
              Editor
            </Typography>
          </Link>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
