import { db } from 'config/firebase.config';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  runTransaction,
  startAt,
} from 'firebase/firestore';

export type ProjectDataType = {
  id: string;
  title: string;
  description: string;
  color: string;
  language: string;
  code: string;
  uid: string;
  userName: string;
  userPicUrl?: string;
  favorites: string[];
  comments: {
    creationDate: string;
    text: string;
    userName: string;
    userPicUrl?: string;
  }[];
  creationDate: string;
};

// this is the ref for the collection, used extensively through this file
const projectsRef = collection(db, 'projects');

// the following functions are the CUD for the projects collection
// there is no project removal designed, so it wasn't implemented

// pagination is already built in, in case it's needed
export const getProjectsByPage = async (page: number) => {
  const pageSize = 20;
  const pageStart = page * pageSize;
  return await getDocs(
    query(
      projectsRef,
      orderBy('creationDate'),
      startAt(pageStart),
      limit(pageSize)
    )
  );
};

export const getProjectById = async (id: string) =>
  await getDoc(doc(db, 'projects', id));

export const getAllProjects = async () => await getDocs(projectsRef);

export const addProject = async (project: ProjectDataType) =>
  await addDoc(projectsRef, project);

export const updateProject = async (project: ProjectDataType) =>
  await runTransaction(db, async transaction => {
    const docRef = doc(db, 'projects', project.id);
    const existing = await transaction.get(docRef);
    if (!existing.exists()) {
      throw new Error('Project does not exist');
    }
    transaction.update(docRef, project);
  });

export const favoriteProject = async (projectId: string, uid: string) =>
  await runTransaction(db, async transaction => {
    const docRef = doc(db, 'projects', projectId);
    const existing = await transaction.get(docRef);
    if (!existing.exists()) {
      throw new Error('Project does not exist');
    }
    // this checks if the user is already in the favorites array
    // and flip it accordingly
    const exFavorites: string[] = existing.data().favorites ?? [];
    const newFavorites = exFavorites.includes(uid)
      ? exFavorites.filter(f => f !== uid)
      : [...exFavorites, uid];
    transaction.update(docRef, {
      favorites: newFavorites,
    });
  });

export const commentProject = async (
  projectId: string,
  text: string,
  userName: string,
  userPicUrl?: string
) =>
  await runTransaction(db, async transaction => {
    const docRef = doc(db, 'projects', projectId);
    const existing = await transaction.get(docRef);
    if (!existing.exists()) {
      throw new Error('Project does not exist');
    }
    transaction.update(docRef, {
      comments: [
        ...(existing.data().comments ?? []),
        { text, userName, userPicUrl, creationDate: new Date().toISOString() },
      ],
    });
  });

export const projectConverter = {
  toFirestore: (project: ProjectDataType) => project,
  fromFirestore: (snapshot: any, options: any) => snapshot.data(options),
};
