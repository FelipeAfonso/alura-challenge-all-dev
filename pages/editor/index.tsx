import { NextPage } from 'next';
import { useLayout } from 'hooks/useLayout';
import { Button, Grid } from '@mui/material';
import { useRecoilState } from 'recoil';
import { darkModeState } from 'context/state/layout.atom';

const Editor: NextPage = () => {
  useLayout('default');
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  return (
    <>
      <Grid item xs={12} lg={6}>
        <Button onClick={() => setDarkMode(!darkMode)}>Dark Mode</Button>
      </Grid>
      <Grid item xs={12} lg={3}>
        Teste222
      </Grid>
    </>
  );
};

export default Editor;
