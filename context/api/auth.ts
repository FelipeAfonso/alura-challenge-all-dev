import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from 'config/firebase.config';

// these are the firebase providers that I chose to use
// organized in a Dictionary in order to make it easier ]
// to add new providers if needed
const providers = {
  github: new GithubAuthProvider(),
  google: new GoogleAuthProvider(),
};

// this function logs in the user with the given provider
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
