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
      console.log('🚀 ~ open', open);
      console.log('🚀 ~ textFieldRef.current', textFieldRef.current);
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
      PaperProps={{ sx: { my: 13, width: 700 } }}
    >
      <TextField
        inputRef={textFieldRef}
        label="Busque por algo"
        variant="filled"
        fullWidth
      />
    </Dialog>
  );
};
