import { FC } from 'react';
import { Stack, StackProps } from '@mui/material';

export const StackedIconButton: FC<StackProps> = props => {
  const { children, ...otherProps } = props;
  return (
    <Stack
      flexDirection="row"
      gap="10px"
      m={1}
      p={1}
      borderRadius={2}
      sx={{
        cursor: 'pointer',
        '&:hover': { backgroundColor: '#FFFFFF14' },
      }}
      {...otherProps}
    >
      {children}
    </Stack>
  );
};
