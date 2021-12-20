import { IconButton, IconButtonProps, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { FC } from 'react';
import makeStyles from '@mui/styles/makeStyles';

interface AluraIconAndTextButton extends IconButtonProps {
  label: string;
  onClick: () => void;
}

export const AluraIconAndTextButton: FC<AluraIconAndTextButton> = props => {
  const { label, children, onClick, ...otherProps } = props;
  const classes = useStyles();
  return (
    <Box
      display="flex"
      gap={2}
      alignItems="center"
      className={props.disabled ? classes.disabledContainer : classes.container}
      onClick={() => onClick()}
    >
      <IconButton sx={{ borderRadius: 4 }} size="large" {...otherProps}>
        {children}
      </IconButton>
      <Typography color="textPrimary">{label}</Typography>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    cursor: 'pointer',
    '&>button': {
      backgroundColor: 'rgba(80, 129, 251, 0.16) !important',
      color: '#8291a8',
    },
    '&>p': {
      color: '#8291a8',
    },
    '&:hover': {
      '&>button': {
        backgroundColor: 'rgba(80, 129, 251, 0.64) !important',
        color: '#d6dfef',
      },
      '&>p': {
        color: '#d6dfef',
      },
    },
  },
  disabledContainer: {
    cursor: 'pointer',
    '&>p': {
      color: '#f2f2f2',
    },
  },
}));
