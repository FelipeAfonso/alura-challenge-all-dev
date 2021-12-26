import { NextPage } from 'next';
import { useLayout } from 'hooks/useLayout';
import { Grid } from '@mui/material';
import Head from 'next/head';
import { EditorContainer } from 'components/EditorContainer';
import mockedData from './mockdata.json';

export type ProjectData = {
  id: string;
  title: string;
  description: string;
  color: string;
  language: string;
  code: string;
  userName: string;
  userPicUrl?: string;
  favoritesCount: number;
  commentsCount: number;
};

const Community: NextPage<{
  data: ProjectData[];
}> = ({ data }) => {
  useLayout('default');
  return (
    <>
      <Head>
        <meta name="author" content="Felipe Afonso" />
        <meta
          property="og:image"
          content="https://alura-challenge-all-dev.vercel.app/aluraDevEmbedabble.jpg"
        />
        <meta property="og:title" content="Comunidade Alura Dev" />
        <meta
          property="og:description"
          content="Aprecie os snippets compartilhados através de nossa plataforma!"
        />
        <title>Comunidade Alura Dev</title>
      </Head>
      <Grid
        item
        container
        xs={12}
        lg={9}
        spacing={3}
        sx={{ px: { xs: 4, lg: 0 } }}
      >
        {(mockedData as ProjectData[]).map(d => (
          <Grid key={d.id} item xs={12} lg={6}>
            <EditorContainer
              initialCode={d.code}
              color={d.color}
              language={d.language}
              editable={false}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Community;
