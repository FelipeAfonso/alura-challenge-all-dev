import { FC } from 'react';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material';

export const BackgroundProvider: FC = ({ children }) => {
  const theme = useTheme();
  // this component allows mUI to control the background color
  // of the whole app
  return (
    <Box
      component="div"
      minHeight="100vh"
      height="100%"
      sx={{ bgcolor: theme.palette.background.default }}
    >
      {children}
    </Box>
  );
};
