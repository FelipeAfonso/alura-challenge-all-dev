import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export type AuthStateType =
  | {
      userName: string;
      picUrl: string;
      token: string;
      uid: string;
    }
  | undefined;

export const authState = atom<AuthStateType>({
  key: 'authState',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
