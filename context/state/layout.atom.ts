import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export type LayoutStateTypes = 'default' | 'none';

export const layoutState = atom<LayoutStateTypes>({
  key: 'layoutState',
  default: 'default',
});

export const darkModeState = atom({
  key: 'darkModeState',
  default: true,
  effects_UNSTABLE: [persistAtom],
});
