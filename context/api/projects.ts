import { db } from 'config/firebase.config';
import { collection, getDocs } from 'firebase/firestore';

export const queryProjects = async () =>
  await getDocs(collection(db, 'projects'));
