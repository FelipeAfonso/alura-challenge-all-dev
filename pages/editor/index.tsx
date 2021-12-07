import { NextPage } from 'next';
import { useLayout } from 'hooks/useLayout';
import { Button, Grid, Paper } from '@mui/material';
import { useRecoilState } from 'recoil';
import { darkModeState } from 'context/state/layout.atom';
import { EditorContainer } from 'components/EditorContainer';

const Editor: NextPage = () => {
  useLayout('default');
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  return (
    <>
      <Grid item xs={12} lg={6}>
        <EditorContainer color="#ff0000" editable />
      </Grid>
      <Grid item xs={12} lg={3}>
        <Button onClick={() => setDarkMode(!darkMode)}>Dark Mode</Button>
      </Grid>
    </>
  );
};

export default Editor;
