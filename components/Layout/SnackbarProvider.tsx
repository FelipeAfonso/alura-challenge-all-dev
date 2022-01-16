import { Alert, Snackbar, SnackbarProps } from '@mui/material';
import { snackbarState } from 'context/state/snackbar.atom';
import { FC } from 'react';
import { useRecoilState } from 'recoil';

export const SnackbarProvider: FC<SnackbarProps> = props => {
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
