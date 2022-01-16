import { GetServerSideProps, NextPage } from 'next';
import { useLayout } from 'hooks/useLayout';
import {
  Autocomplete,
  Avatar,
  Button,
  FilledInput,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import languages from 'public/languages.json';
import { useEffect, useMemo, useState } from 'react';
import ColorPicker from 'components/ColorPicker';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import {
  commentProject,
  getProjectById,
  ProjectDataType,
  updateProject,
} from 'context/api/projects';
import { authState } from 'context/state/auth.atom';
import { useRecoilValue } from 'recoil';
import { addProject } from 'context/api/projects';
import { useRouter } from 'next/router';
import { Send } from 'assets/icons/Send';
import { darkModeState } from 'context/state/layout.atom';
import { formatDistanceToNow } from 'date-fns';
import ptLocale from 'date-fns/locale/pt-BR';
const EditorContainer = dynamic(import('components/EditorContainer'), {
  ssr: false,
});

const Editor: NextPage<{
  data?: ProjectDataType;
}> = ({ data }) => {
  const router = useRouter();
  useLayout('default');

  const auth = useRecoilValue(authState);
  const darkMode = useRecoilValue(darkModeState);
  const userProjectData: Partial<ProjectDataType> = useMemo(
    () => ({
      userName: auth?.userName,
      userPicUrl: auth?.picUrl,
      uid: auth?.uid,
    }),
    [auth]
  );
  const initialProjectState = {
    title: '',
    description: '',
    code: '',
    language: '',
    color: '',
  };
  const [project, setProject] = useState<Partial<ProjectDataType>>({
    ...initialProjectState,
    ...data,
  });
  const [commentary, setCommentary] = useState('');
  const [triedToSubmit, setTriedToSubmit] = useState(false);
  const [language, setLanguage] = useState('javascript');
  const [color, setColor] = useState('');

  const errors = useMemo(
    () =>
      Object.keys(project).filter(k => !(project as Record<string, string>)[k]),
    [project]
  );

  useEffect(() => {
    if (color) setProject(proj => ({ ...proj, color }));
  }, [color, setProject]);

  useEffect(() => {
    if (language) setProject(proj => ({ ...proj, language }));
  }, [language, setProject]);

  useEffect(() => {
    if (data) setProject(proj => ({ ...proj, ...data }));
    else setProject(initialProjectState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, setProject]);

  const ableToEdit = useMemo(
    () => (!!data?.uid && data.uid === auth?.uid) || !data?.uid,
    [auth, data]
  );

  return (
    <>
      <Head>
        <meta name="author" content="Felipe Afonso" />
        <meta
          property="og:image"
          content="https://alura-challenge-all-dev.vercel.app/aluraDevEmbedabble.jpg"
        />
        <meta property="og:title" content="Editor de código Alura Dev" />
        <meta
          property="og:description"
          content="Nosso editor com syntax highlighting automático o ajudará a compartilhar seus snippets de uma forma elegante!"
        />
        <title>Editor Alura Dev</title>
      </Head>
      <Grid
        container
        item
        xs={12}
        lg={9}
        spacing={5}
        sx={{ px: { xs: 4, lg: 0 } }}
      >
        <Grid item xs={12} lg={8}>
          <EditorContainer
            color={color}
            language={language ?? 'javascript'}
            onChange={code => {
              setProject({ ...project, code });
            }}
            initialCode={project.code}
            tabIndex={0}
            editable={ableToEdit}
          />
          {data?.id && (
            <Stack gap={2} my={3}>
              {auth?.uid && (
                <Stack direction="row" alignItems="center" gap={1}>
                  <FormControl fullWidth>
                    <InputLabel
                      variant="filled"
                      sx={{ ml: 6 }}
                      htmlFor="comment-field"
                    >
                      Adicione um comentário!
                    </InputLabel>
                    <FilledInput
                      id="comment-field"
                      value={commentary}
                      onChange={e => setCommentary(e.target.value)}
                      startAdornment={
                        <InputAdornment position="start">
                          <Avatar src={auth!.picUrl} />
                        </InputAdornment>
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => {
                              if (commentary.length) {
                                commentProject(
                                  data.id,
                                  commentary,
                                  auth.userName,
                                  auth.picUrl
                                );
                              }
                            }}
                          >
                            <Send />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Stack>
              )}
              {data.comments?.map((comment, i) => (
                <Stack
                  key={i}
                  direction="row"
                  gap={1}
                  borderRadius={3}
                  px={2}
                  py={1}
                  alignItems="center"
                  bgcolor={darkMode ? '#ffffff24' : '#00000024'}
                >
                  <Avatar src={comment.userPicUrl} />
                  <Stack direction="column" gap={0.5}>
                    <Typography color="textPrimary" variant="body1">
                      {`${comment.userName} ${
                        comment.creationDate
                          ? `- ${formatDistanceToNow(
                              new Date(comment.creationDate),
                              { locale: ptLocale }
                            )}`
                          : ''
                      }`}
                    </Typography>
                    <Typography color="textPrimary" variant="caption">
                      {comment.text}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          )}
        </Grid>
        <Grid item xs={12} lg={4}>
          <Stack gap={2} mb={2}>
            <Typography
              variant="caption"
              color="textPrimary"
              sx={{ letterSpacing: 5, mx: 2 }}
            >
              SEU PROJETO
            </Typography>
            <TextField
              variant="filled"
              inputProps={{
                'data-testid': 'project_name',
              }}
              disabled={!ableToEdit}
              onChange={e => {
                setProject({ ...project, title: e.target.value });
              }}
              value={project.title}
              error={!!errors.find(e => e === 'title') && triedToSubmit}
              helperText={
                errors.find(e => e === 'title') &&
                triedToSubmit &&
                'O título é obrigatório'
              }
              label="Nome do seu projeto"
              aria-label="Nome do seu projeto"
              role="textbox"
              tabIndex={1}
            />
            <TextField
              variant="filled"
              inputProps={{
                'data-testid': 'project_description',
              }}
              disabled={!ableToEdit}
              onChange={e => {
                setProject({ ...project, description: e.target.value });
              }}
              error={!!errors.find(e => e === 'description') && triedToSubmit}
              helperText={
                errors.find(e => e === 'description') &&
                triedToSubmit &&
                'A descrição é obrigatória'
              }
              value={project.description}
              label="Descrição do seu projeto"
              aria-label="Descrição do seu projeto"
              role="textbox"
              minRows={2}
              maxRows={6}
              tabIndex={2}
              multiline
            />
          </Stack>
          <Stack gap={2} my={5}>
            <Typography
              variant="caption"
              color="textPrimary"
              sx={{ letterSpacing: 5, mx: 2 }}
            >
              PERSONALIZAÇÃO
            </Typography>
            <Autocomplete
              disablePortal
              options={languages}
              disabled={!ableToEdit}
              onChange={(_ev, value) => {
                if (value) {
                  setLanguage(value);
                }
              }}
              value={language}
              renderInput={params => (
                <TextField
                  {...params}
                  variant="filled"
                  inputProps={{
                    ...params.inputProps,
                    'data-testid': 'project_language',
                  }}
                  error={!!errors.find(e => e === 'language') && triedToSubmit}
                  helperText={
                    errors.find(e => e === 'language') &&
                    triedToSubmit &&
                    'A linguagem é obrigatória'
                  }
                  aria-label="Linguagem"
                  label="Linguagem"
                  role="textbox"
                />
              )}
              tabIndex={3}
              fullWidth
            />
            <ColorPicker
              disabled={!ableToEdit}
              initialValue={data?.color}
              textFieldProps={{
                inputProps: { 'data-testid': 'project_color' },
                error: !!errors.find(e => e === 'color') && triedToSubmit,
                helperText:
                  errors.find(e => e === 'color') &&
                  triedToSubmit &&
                  'A cor é obrigatória',
              }}
              onChange={color => {
                setColor(color);
              }}
            />
            {ableToEdit && (
              <Button
                disabled={!ableToEdit}
                variant="contained"
                color={
                  !auth?.uid || (triedToSubmit && errors.length)
                    ? 'error'
                    : 'primary'
                }
                data-testid="project_save"
                aria-label="Salvar Projeto"
                role="button"
                sx={{ mt: 2, height: 56 }}
                onClick={() => {
                  if (!auth?.token) {
                    router.push('/login');
                    return;
                  }
                  setTriedToSubmit(true);

                  if (ableToEdit && data?.id && !errors.length && auth?.token) {
                    const projectData = {
                      ...data,
                      ...project,
                      ...userProjectData,
                      creationDate: new Date().toISOString(),
                    } as ProjectDataType;
                    updateProject(projectData);
                    router.push('/comunidade');
                  } else if (!errors.length && auth?.token) {
                    const projectData = {
                      ...project,
                      ...userProjectData,
                      creationDate: new Date().toISOString(),
                    } as ProjectDataType;
                    addProject(projectData);
                    router.push('/comunidade');
                  }
                }}
                tabIndex={4}
              >
                <Typography sx={{ color: '#051D3B', textTransform: 'none' }}>
                  {ableToEdit && data?.id
                    ? 'Atualizar projeto'
                    : auth?.token
                    ? 'Salvar projeto'
                    : 'Faça o Login para salvar'}
                </Typography>
              </Button>
            )}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  if (context.params?.slug) {
    const id = Array.isArray(context.params.slug)
      ? context.params.slug[0]
      : context.params.slug;
    const res = await getProjectById(id);
    const rawData = await res.data();
    if (rawData) {
      const data = {
        ...rawData,
        id: res.id,
      };
      return {
        props: {
          data,
        },
      };
    }
  }
  return { props: {} };
};

export default Editor;
