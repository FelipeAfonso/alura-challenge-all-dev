import { NextPage } from 'next';
import { useLayout } from 'hooks/useLayout';
import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import Head from 'next/head';
import mockedData from './mockdata.json';
import { TextBubble } from 'assets/icons/TextBubble';
import { Heart } from 'assets/icons/Heart';
import { StackedIconButton } from 'components/StackedIconButton';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const EditorContainer = dynamic(import('components/EditorContainer'), {
  ssr: false,
});

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
  const router = useRouter();
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
        sx={{ px: { xs: 4, lg: 0 }, mb: 3 }}
      >
        {(mockedData as ProjectData[]).map(d => (
          <Grid key={d.id} item xs={12} lg={6}>
            <Box
              display="flex"
              flexDirection="column"
              bgcolor="#00000029"
              borderRadius={2}
              data-testid="project_box"
              data-id={d.id}
              aria-label={`Projeto ${d.title}`}
              role="link"
              sx={{ cursor: 'pointer' }}
              onClick={() => router.push(`/editor/${d.id}`)}
            >
              <EditorContainer
                initialCode={d.code}
                color={d.color}
                language={d.language}
                editable={false}
              />
              <Stack p={3} gap={1}>
                <Typography variant="subtitle2" color="textPrimary">
                  {d.title}
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  {d.description}
                </Typography>
              </Stack>
              <Box display="flex" px={3} mt={1} mb={3} alignItems="center">
                <StackedIconButton
                  role="button"
                  aria-label="Deixe seu comentário"
                  data-testid="comment_button"
                  onClick={() => console.log('comment')}
                >
                  <TextBubble fill="#fff" />
                  <Typography variant="body1" color="textPrimary">
                    {d.commentsCount}
                  </Typography>
                </StackedIconButton>
                <StackedIconButton
                  role="button"
                  aria-label="Favoritar código"
                  data-testid="fav_button"
                  onClick={() => console.log('faved')}
                >
                  <Heart fill="#fff" />
                  <Typography variant="body1" color="textPrimary">
                    {d.favoritesCount}
                  </Typography>
                </StackedIconButton>
                <Stack
                  flexDirection="row"
                  flex={1}
                  gap={1}
                  m={1}
                  justifyContent="end"
                  alignItems="center"
                  role="img"
                  aria-label={`Imagem do usuário: ${d.userName}`}
                >
                  <Avatar sx={{ width: 24, height: 24 }} src={d.userPicUrl} />
                  <Typography variant="body1" color="textPrimary">
                    {d.userName}
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Community;
