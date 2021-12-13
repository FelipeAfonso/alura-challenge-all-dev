import { NextPage } from 'next';
import { useLayout } from 'hooks/useLayout';
import { Grid } from '@mui/material';
import Head from 'next/head';

const Community: NextPage = () => {
  useLayout('default');
  return (
    <>
      <Head>
        <meta name="author" content="Felipe Afonso" />
        <meta property="og:image" content="/aluraDevEmbedabble.jpg" />
        <meta property="og:title" content="Comunidade Alura Dev" />
        <meta
          property="og:description"
          content="Aprecie os snippets compartilhados através de nossa plataforma!"
        />
        <title>Comunidade Alura Dev</title>
      </Head>
      <Grid item xs={12} lg={6}>
        Teste!!
      </Grid>
      <Grid item xs={12} lg={3}>
        Teste222
      </Grid>
    </>
  );
};

export default Community;
