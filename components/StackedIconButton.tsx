import { FC } from 'react';
import { Stack, StackProps } from '@mui/material';

interface StackedIconButtonProps extends StackProps {
  disabled?: boolean;
}
export const StackedIconButton: FC<StackedIconButtonProps> = props => {
  const { children, disabled, ...otherProps } = props;
  return (
    <Stack
      flexDirection="row"
      gap="10px"
      m={1}
      p={1}
      borderRadius={2}
      sx={{
        cursor: disabled ? 'default' : 'pointer',
        '&:hover': disabled ? {} : { backgroundColor: '#FFFFFF14' },
      }}
      {...otherProps}
    >
      {children}
    </Stack>
  );
};
