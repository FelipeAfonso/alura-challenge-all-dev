import { NextPage } from 'next';
import { useLayout } from 'hooks/useLayout';
import {
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
// import { useRecoilState } from 'recoil';
// import { darkModeState } from 'context/state/layout.atom';
import { EditorContainer } from 'components/EditorContainer';

const Editor: NextPage = () => {
  useLayout('default');
  // const [darkMode, setDarkMode] = useRecoilState(darkModeState);
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
        <EditorContainer color="#ff0000" editable />
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
      </Grid>
    </Grid>
  );
};

export default Editor;
