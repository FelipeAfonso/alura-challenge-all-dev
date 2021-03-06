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
  disabled?: boolean;
  initialValue?: string;
}

const colors = ['#6BD1FF', '#FFC46B', '#FF6BCD', '#6B83FF', '#9AFF6B'];

const Circle: FC<{ color: string }> = ({ color }) => (
  <svg width={12} height={12} viewBox="0 0 12 12">
    <circle cx="6" cy="6" r="6" fill={color} />
  </svg>
);

const ColorPicker: FC<ColorPickerProps> = ({
  onChange,
  textFieldProps,
  disabled,
  initialValue,
}) => {
  // this is the default color picker, it uses an autocomplete
  // as the base, using an icon adornment to show the selected color
  // I chose to use this instead of an already stabilished color picker
  // due to lack of need to pick a pixel perfect color by hand, and if
  // that is the case, the user can still paste the hexcode he wants,
  // or even use css color tags!

  const [value, setValue] = useState(initialValue ?? '#6BD1FF');

  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  useEffect(() => {
    setValue(initialValue ?? '#6BD1FF');
  }, [initialValue]);

  return (
    <Autocomplete
      disablePortal
      freeSolo
      options={colors}
      onChange={(_ev, value) => value && setValue(value)}
      disabled={disabled}
      value={value}
      fullWidth
      renderInput={params => {
        const InputProps = {
          ...params.InputProps,
          ...textFieldProps?.InputProps,
          startAdornment: <Circle color={value} />,
        };
        const inputProps = {
          ...params.inputProps,
          ...textFieldProps?.inputProps,
        };
        return (
          <TextField
            {...textFieldProps}
            {...params}
            InputProps={InputProps}
            inputProps={inputProps}
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
