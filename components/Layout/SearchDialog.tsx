import { Dialog, TextField } from '@mui/material';
import { FC, useEffect, useRef } from 'react';

export const SearchDialog: FC<{
  onClose: () => void;
  open: boolean;
}> = ({ open, onClose }) => {
  const textFieldRef = useRef<any>(null);

  useEffect(() => {
    setTimeout(() => {
      if (open) textFieldRef.current?.focus();
    }, 100);
  }, [open, textFieldRef]);

  return (
    <Dialog
      onClose={() => onClose()}
      open={open}
      sx={{
        '& .MuiDialog-container': {
          alignItems: 'start',
        },
      }}
      PaperProps={{ sx: { my: 13, width: 700, borderRadius: 3 } }}
    >
      <TextField
        inputRef={textFieldRef}
        label="Busque por algo"
        inputProps={{
          'data-testid': 'search_box_dialog',
        }}
        aria-label="Busque por algo"
        role="searchbox"
        variant="filled"
        fullWidth
      />
    </Dialog>
  );
};
