import { atom } from 'recoil';

export type LayoutStateTypes = 'default' | 'none';

export const layoutState = atom<LayoutStateTypes>({
  key: 'layoutState',
  default: 'default',
});

export const darkModeState = atom({ key: 'darkModeState', default: true });
