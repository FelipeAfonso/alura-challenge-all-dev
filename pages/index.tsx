import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useLayout } from 'hooks/useLayout';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  useLayout('none');
  return (
    <>
      <Head>
        <title>Home Alura Dev</title>
      </Head>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Stack>
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
