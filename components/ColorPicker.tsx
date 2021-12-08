import {
  Autocomplete,
  AutocompleteProps,
  TextField,
  TextFieldProps,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { FC, useEffect, useState } from 'react';

interface ColorPickerProps {
  onChange: (v: string) => void;
  textFieldProps?: TextFieldProps;
}

const colors = ['#6BD1FF', '#FFC46B', '#FF6BCD', '#6B83FF', '#9AFF6B'];

const Circle: FC<{ color: string }> = ({ color }) => (
  <svg width={12} height={12} viewBox="0 0 12 12">
    <circle cx="6" cy="6" r="6" fill={color} />
  </svg>
);

const ColorPicker: FC<ColorPickerProps> = ({ onChange, textFieldProps }) => {
  const [value, setValue] = useState('#6BD1FF');

  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <Autocomplete
      disablePortal
      freeSolo
      options={colors}
      onChange={(_ev, value) => value && setValue(value)}
      value={value}
      fullWidth
      renderInput={params => {
        const InputProps = {
          ...params.InputProps,
          startAdornment: <Circle color={value} />,
        };
        return (
          <TextField
            {...textFieldProps}
            {...params}
            InputProps={InputProps}
            variant="filled"
            label="Cor"
          />
        );
      }}
      renderOption={(props, option) => (
        <li {...props}>
          <Box display="flex" gap={1} alignItems="center">
            <Circle color={option} />
            <Typography>{option}</Typography>
          </Box>
        </li>
      )}
    />
  );
};

export default ColorPicker;
