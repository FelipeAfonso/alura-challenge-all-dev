import { Alert, Snackbar } from '@mui/material';
import { snackbarState } from 'context/state/snackbar.atom';
import { FC } from 'react';
import { useRecoilState } from 'recoil';

export const SnackbarProvider: FC = () => {
  // this is a global snackbar component
  // it is imported in the layout component
  // and it listens to the snackbar state
  // in order to show the snackbar messages!

  const [snackbar, setSnackbar] = useRecoilState(snackbarState);
  return (
    <Snackbar
      open={!!snackbar}
      autoHideDuration={6000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      onClose={() => setSnackbar(undefined)}
    >
      <Alert severity={snackbar?.type}>{snackbar?.message}</Alert>
    </Snackbar>
  );
};
