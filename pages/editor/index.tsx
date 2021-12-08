import { NextPage } from 'next';
import { useLayout } from 'hooks/useLayout';
import {
  Autocomplete,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { EditorContainer } from 'components/EditorContainer';
import languages from 'public/languages.json';
import { useState } from 'react';
import ColorPicker from 'components/ColorPicker';

const Editor: NextPage = () => {
  useLayout('default');
  const [language, setLanguage] = useState('javascript');
  const [color, setColor] = useState('');
  return (
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
          editable
          language={language ?? 'javascript'}
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
          <TextField variant="filled" label="Nome do seu projeto" />
          <TextField
            variant="filled"
            label="Descrição do seu projeto"
            minRows={2}
            maxRows={6}
            multiline
          />
        </Stack>
        <Stack gap={2} mb={2}>
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
            fullWidth
            renderInput={params => (
              <TextField {...params} variant="filled" label="Linguagem" />
            )}
          />
          <ColorPicker onChange={color => setColor(color)} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Editor;
