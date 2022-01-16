import { atom } from 'recoil';

export type SnackbarStateType =
  | {
      message: string;
      type: 'success' | 'error' | 'info';
    }
  | undefined;

// this is the brain behind the global snackbar
export const snackbarState = atom<SnackbarStateType>({
  key: 'snackbarState',
  default: undefined,
});
