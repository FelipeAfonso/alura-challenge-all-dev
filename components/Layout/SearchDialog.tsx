import { Dialog, IconButton, InputAdornment, TextField } from '@mui/material';
import { Send } from 'assets/icons/Send';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';

export const SearchDialog: FC<{
  onClose: () => void;
  open: boolean;
}> = ({ open, onClose }) => {
  // this is the open search dialog!

  const [search, setSearch] = useState('');
  const router = useRouter();
  const textFieldRef = useRef<any>(null);

  const handleSearch = () => {
    if (search.length) {
      onClose();
      router.push(`/comunidade?search=${search}`);
    }
  };

  // this useEffect is to focus the text field when the dialog opens
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
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <Send />
              </IconButton>
            </InputAdornment>
          ),
        }}
        aria-label="Busque por algo"
        role="searchbox"
        variant="filled"
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && handleSearch()}
        fullWidth
      />
    </Dialog>
  );
};
