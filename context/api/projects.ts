import { db } from 'config/firebase.config';
import {
  addDoc,
  collection,
  doc,
  endAt,
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

const projectsRef = collection(db, 'projects');

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
        { text, userName, userPicUrl },
      ],
    });
  });

export const projectConverter = {
  toFirestore: (project: ProjectDataType) => project,
  fromFirestore: (snapshot: any, options: any) => snapshot.data(options),
};
