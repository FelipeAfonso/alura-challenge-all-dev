import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCVtdmklKCBefOCYzdXvWoxAZO2Mdeaynk',
  authDomain: 'alura-dev.firebaseapp.com',
  projectId: 'alura-dev',
  storageBucket: 'alura-dev.appspot.com',
  messagingSenderId: '763818212435',
  appId: '1:763818212435:web:412294745390fa88201aa6',
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();

export default firebaseConfig;
