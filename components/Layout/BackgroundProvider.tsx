import { FC } from 'react';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material';

export const BackgroundProvider: FC = ({ children }) => {
  const theme = useTheme();
  return (
    <Box
      component="div"
      height="100vh"
      sx={{ bgcolor: theme.palette.background.default }}
    >
      {children}
    </Box>
  );
};
