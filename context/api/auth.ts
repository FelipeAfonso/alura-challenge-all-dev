import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from 'config/firebase.config';

// Inside AuthProvider
const provider = new GoogleAuthProvider();

export const login = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    return res.user;
  } catch (err: any) {
    return err.message as string;
  }
};

export const logout = () => {
  auth.signOut();
};
