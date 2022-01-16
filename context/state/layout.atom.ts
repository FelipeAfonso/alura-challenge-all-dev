import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export type LayoutStateTypes = 'default' | 'none';

// this atom controls the layout content,
// so 'none' means no header or sidebar/menu
export const layoutState = atom<LayoutStateTypes>({
  key: 'layoutState',
  default: 'default',
});

// this controls the darkmode easter egg!
export const darkModeState = atom({
  key: 'darkModeState',
  default: true,
  effects_UNSTABLE: [persistAtom],
});
