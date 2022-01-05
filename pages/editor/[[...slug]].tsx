import { NextPage } from 'next';
import { useLayout } from 'hooks/useLayout';
import {
  Autocomplete,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { EditorContainer } from 'components/EditorContainer';
import languages from 'public/languages.json';
import { useState } from 'react';
import ColorPicker from 'components/ColorPicker';
import Head from 'next/head';
import { useRouter } from 'next/router';

const initialCode = `[] == ![]; // -> true
!!"false" == !!"true"; // -> true
"b" + "a" + +"a" + "a"; // -> 'baNaNa'
NaN === NaN; // -> false
(![] + [])[+[]] +
  (![] + [])[+!+[]] +
  ([![]] + [][[]])[+!+[] + [+[]]] +
  (![] + [])[!+[] + !+[]];
// -> 'fail'
!![]       // -> true
[] == true // -> false`;

const Editor: NextPage = () => {
  useLayout('default');
  const router = useRouter();
  const { slug } = router.query;
  const [language, setLanguage] = useState('javascript');
  const [color, setColor] = useState('');
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
            initialCode={initialCode}
            tabIndex={0}
            editable
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          {/* <Button onClick={() => setDarkMode(!darkMode)}>Dark Mode</Button> */}
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
              onChange={(_ev, value) => value && setLanguage(value)}
              value={language}
              renderInput={params => (
                <TextField
                  {...params}
                  variant="filled"
                  inputProps={{
                    ...params.inputProps,
                    'data-testid': 'project_language',
                  }}
                  aria-label="Linguagem"
                  label="Linguagem"
                  role="textbox"
                />
              )}
              tabIndex={3}
              fullWidth
            />
            <ColorPicker
              textFieldProps={{
                inputProps: { 'data-testid': 'project_color' },
              }}
              onChange={color => setColor(color)}
            />
            <Button
              variant="contained"
              color="primary"
              data-testid="project_save"
              aria-label="Salvar Projeto"
              role="button"
              sx={{ mt: 2, height: 56 }}
              tabIndex={4}
            >
              <Typography sx={{ color: '#051D3B', textTransform: 'none' }}>
                Salvar projeto
              </Typography>
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Editor;