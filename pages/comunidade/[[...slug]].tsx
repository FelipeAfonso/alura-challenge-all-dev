import { GetServerSideProps, NextPage } from 'next';
import { useLayout } from 'hooks/useLayout';
import { Button, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import { getProjectsByPage, ProjectDataType } from 'context/api/projects';
import { CommunityCard } from 'components/CommunityCard';
import { useRecoilValue } from 'recoil';
import { authState } from 'context/state/auth.atom';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Arrow } from 'assets/icons/Arrow';

// this function split the projects between those owned by the logged user
// and the other projects. It could also be expanded to filter by favorited aswell
const filterProjectDataByUser = (projects: ProjectDataType[], uid: string) =>
  projects
    ?.sort((a, b) =>
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

// this function is the wrapper for the projects data fetching
// and manipulation, as the id is not integrated in the raw data
const fetchData = async () => {
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
  return data;
};

const Community: NextPage<{
  data: ProjectDataType[];
}> = ({ data }) => {
  useLayout('default');
  const auth = useRecoilValue(authState);

  const router = useRouter();
  const searchQuery = Array.isArray(router.query.search)
    ? router.query.search[0]
    : router.query.search;
  const search = searchQuery?.toLowerCase();

  // these two states are used to implement hybrid data fetching
  // as SSR is not able to invalidate data that was manipulated
  // by itself, so on specific events, we trigger a new fetch
  const [hybridData, setHybridData] = useState(data);
  const [isDataStateInvalid, setIsDataStateInvalid] = useState(true);

  const [userProjects, otherProjects] = filterProjectDataByUser(
    hybridData.filter(
      d =>
        (search?.length &&
          (d.title.toLowerCase().includes(search) ||
            d.userName.toLowerCase().includes(search) ||
            d.description.toLowerCase().includes(search))) ||
        !search?.length
    ),
    auth?.uid ?? ''
  );

  // this hook fires a refetch when an invalidation is declared
  useEffect(() => {
    if (isDataStateInvalid)
      fetchData().then(data => {
        setHybridData(data);
        setIsDataStateInvalid(false);
      });
  }, [isDataStateInvalid]);

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
        {search?.length ? (
          <Button
            startIcon={<Arrow />}
            sx={{ my: 1 }}
            onClick={() => router.push('/comunidade')}
          >
            Retornar à comunidade
          </Button>
        ) : null}
        {search?.length && !userProjects.length && !otherProjects.length ? (
          <Typography variant="subtitle2" color="textPrimary">
            Nenhum resultado encontrado
          </Typography>
        ) : null}
        {userProjects.length ? (
          <>
            <Typography variant="subtitle2" color="textPrimary" paragraph>
              Seus Projetos
            </Typography>
            <Grid container spacing={3}>
              {(userProjects as ProjectDataType[]).map(d => (
                <Grid key={d.id} item xs={12} lg={6}>
                  <CommunityCard
                    d={d}
                    onInvalidate={() => setIsDataStateInvalid(true)}
                  />
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
        ) : null}
        <Grid container spacing={3}>
          {(otherProjects as ProjectDataType[]).map(d => (
            <Grid key={d.id} item xs={12} lg={6}>
              <CommunityCard
                d={d}
                onInvalidate={() => setIsDataStateInvalid(true)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchData();
  return {
    props: {
      data,
    },
  };
};

export default Community;
