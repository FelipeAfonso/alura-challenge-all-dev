import { SvgIcon, SvgIconProps } from '@mui/material';

export const Send = (props: SvgIconProps) => (
  <SvgIcon width="20" height="20" viewBox="0 0 20 20" {...props} fill="none">
    <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" fill={props.fill} />
  </SvgIcon>
);
