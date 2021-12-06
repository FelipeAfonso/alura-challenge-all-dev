import { SvgIcon, SvgIconProps } from '@mui/material';

export const Hamburger = (props: SvgIconProps) => (
  <SvgIcon width="20" height="18" viewBox="0 0 20 18" {...props} fill="none">
    <path
      d="M0.714286 3.46429H19.2857C19.6802 3.46429 20 3.14451 20 2.75V0.964286C20 0.569777 19.6802 0.25 19.2857 0.25H0.714286C0.319777 0.25 0 0.569777 0 0.964286V2.75C0 3.14451 0.319777 3.46429 0.714286 3.46429ZM0.714286 10.6071H19.2857C19.6802 10.6071 20 10.2874 20 9.89286V8.10714C20 7.71263 19.6802 7.39286 19.2857 7.39286H0.714286C0.319777 7.39286 0 7.71263 0 8.10714V9.89286C0 10.2874 0.319777 10.6071 0.714286 10.6071ZM0.714286 17.75H19.2857C19.6802 17.75 20 17.4302 20 17.0357V15.25C20 14.8555 19.6802 14.5357 19.2857 14.5357H0.714286C0.319777 14.5357 0 14.8555 0 15.25V17.0357C0 17.4302 0.319777 17.75 0.714286 17.75Z"
      fill={props.fill}
    />
  </SvgIcon>
);
