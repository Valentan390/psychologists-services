import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getDatabase,
  ref,
  push,
  remove,
  set,
  orderByChild,
  equalTo,
  query,
  onValue,
  get,
} from "firebase/database";

import { PsychologistInter } from "../../helpers/InterfaceData";
import { getAuth } from "firebase/auth";

export const addFavoritePsychologist = createAsyncThunk(
  "favorite/addPsychologist",
  async (psychologist: PsychologistInter) => {
    try {
      const auth = getAuth();
      const userId = auth.currentUser?.uid;
      if (userId) {
        const db = getDatabase();
        const postListRef = ref(db, `Users/${userId}`);
        const newPostRef = push(postListRef);
        await set(newPostRef, psychologist);
      }
      return psychologist;
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
      throw error;
    }
  }
);

export const removeFavoritePsychologist = createAsyncThunk(
  "favorite/removePsychologist",
  async (psychologist: PsychologistInter) => {
    try {
      const auth = getAuth();
      const userId = auth.currentUser?.uid;
      if (userId) {
        const db = getDatabase();
        const dbRef = ref(db, `Users/${userId}`);
        const filterPsychologist = query(
          dbRef,
          orderByChild("name"),
          equalTo(psychologist.name)
        );
        const snapshot = await get(filterPsychologist);
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childRef = ref(db, `Users/${userId}/${childKey}`);
          remove(childRef);
        });
      }
      return psychologist;
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
      throw error;
    }
  }
);

interface FetchUserFavoritesResponse {
  data: PsychologistInter[];
  error?: string;
}

export const fetchUserFavorites = createAsyncThunk(
  "favorite/fetchUserFavorites",
  async (): Promise<FetchUserFavoritesResponse> => {
    try {
      const auth = getAuth();
      const userId = auth.currentUser?.uid;
      if (!userId) {
        // throw new Error("User ID is not available");
      }

      const db = getDatabase();
      const dbRef = ref(db, `Users/${userId}`);

      return new Promise<FetchUserFavoritesResponse>((resolve, reject) => {
        onValue(
          dbRef,
          (snapshot) => {
            const data = snapshot.val();
            const psychologistsDataFavorites: PsychologistInter[] = data
              ? Object.values(data)
              : [];
            resolve({ data: psychologistsDataFavorites });
          },
          (error) => {
            reject({ error: error.message });
          }
        );
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
      throw error;
    }
  }
);
