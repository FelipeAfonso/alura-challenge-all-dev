import { SvgIcon, SvgIconProps } from '@mui/material';

export const Arrow = (props: SvgIconProps) => (
  <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props} fill="none">
    <path
      fill={props.fill}
      d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
    />
  </SvgIcon>
);