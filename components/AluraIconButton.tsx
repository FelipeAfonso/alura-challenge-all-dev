import { IconButton } from '@mui/material';
import { styled } from '@mui/system';

export const AluraIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: 3,
  p: 1.3,
  '&:hover': { backgroundColor: theme.palette.primary.light },
}));
