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
  startAt,
} from 'firebase/firestore';

export type ProjectDataType = {
  id: string;
  title: string;
  description: string;
  color: string;
  language: string;
  code: string;
  userName: string;
  userPicUrl?: string;
  favoritesCount: number;
  commentsCount: number;
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

export const projectConverter = {
  toFirestore: (project: ProjectDataType) => project,
  fromFirestore: (snapshot: any, options: any) => snapshot.data(options),
};
