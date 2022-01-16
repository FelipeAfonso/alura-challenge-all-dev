import { GetStaticProps, NextPage } from 'next';
import { useLayout } from 'hooks/useLayout';
import { Grid, Typography } from '@mui/material';
import Head from 'next/head';
import { getProjectsByPage, ProjectDataType } from 'context/api/projects';
import { CommunityCard } from 'components/CommunityCard';
import { useRecoilValue } from 'recoil';
import { authState } from 'context/state/auth.atom';

const filterProjectDataByUser = (projects: ProjectDataType[], uid: string) =>
  projects
    .sort((a, b) =>
      new Date(a.creationDate).getTime() < new Date(b.creationDate).getTime()
        ? 1
        : -1
    )
    .reduce(
      (acc, project) => {
        if (project.uid === uid) {
          acc[0].push(project);
        } else {
          acc[1].push(project);
        }
        return acc;
      },
      [[], []] as [ProjectDataType[], ProjectDataType[]]
    );

const Community: NextPage<{
  data: ProjectDataType[];
}> = ({ data }) => {
  useLayout('default');
  const auth = useRecoilValue(authState);

  const [userProjects, otherProjects] = filterProjectDataByUser(
    data,
    auth?.uid ?? ''
  );

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

      <Grid item xs={12} lg={9} sx={{ px: { xs: 4, lg: 0 }, mb: 3 }}>
        {userProjects.length && (
          <>
            <Typography variant="subtitle2" color="textPrimary" paragraph>
              Seus Projetos
            </Typography>
            <Grid container spacing={3}>
              {(userProjects as ProjectDataType[]).map(d => (
                <Grid key={d.id} item xs={12} lg={6}>
                  <CommunityCard d={d} />
                </Grid>
              ))}
            </Grid>
            <Typography
              sx={{ mt: 2 }}
              variant="subtitle2"
              color="textPrimary"
              paragraph
            >
              Outros Projetos
            </Typography>
          </>
        )}
        <Grid container spacing={3}>
          {(otherProjects as ProjectDataType[]).map(d => (
            <Grid key={d.id} item xs={12} lg={6}>
              <CommunityCard d={d} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await getProjectsByPage(0);
  let data: ProjectDataType[] = [];
  res.forEach(d => {
    const newEntry = d.data() as ProjectDataType;
    data = [
      ...data,
      {
        ...newEntry,
        id: d.id,
      },
    ];
  });
  return {
    revalidate: 15,
    props: {
      data,
    },
  };
};

export default Community;
