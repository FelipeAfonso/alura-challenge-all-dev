import { atom } from 'recoil';

export type SnackbarStateType =
  | {
      message: string;
      type: 'success' | 'error' | 'info';
    }
  | undefined;

export const snackbarState = atom<SnackbarStateType>({
  key: 'snackbarState',
  default: undefined,
});
