import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from 'config/firebase.config';

// Inside AuthProvider
const providers = {
  github: new GithubAuthProvider(),
  google: new GoogleAuthProvider(),
};

export const login = async (provider: 'github' | 'google') => {
  try {
    const res = await signInWithPopup(auth, providers[provider]);
    return res.user;
  } catch (err: any) {
    return err.message as string;
  }
};

export const logout = () => {
  auth.signOut();
};
