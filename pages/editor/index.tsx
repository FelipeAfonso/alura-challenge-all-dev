import { NextPage } from 'next';
import { useLayout } from 'hooks/useLayout';
import { Grid } from '@mui/material';

const Editor: NextPage = () => {
  useLayout('default');
  return (
    <>
      <Grid item xs={12} lg={6}>
        Teste!!
      </Grid>
      <Grid item xs={12} lg={3}>
        Teste222
      </Grid>
    </>
  );
};

export default Editor;
