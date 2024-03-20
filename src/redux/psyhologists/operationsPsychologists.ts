import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getDatabase,
  ref,
  query,
  orderByKey,
  startAt,
  endBefore,
  onValue,
} from "firebase/database";
import { PsychologistInter } from "../../helpers/InterfaceData";
import { toast } from "react-toastify";

interface IfetchPsychologists {
  currentPage: number;
}

interface FetchUserFavoritesResponse {
  data: PsychologistInter[];
  error?: string;
}

export const fetchPsychologists = createAsyncThunk(
  "psychologists/fetchPsychologists",
  async ({ currentPage }: IfetchPsychologists) => {
    return new Promise<FetchUserFavoritesResponse>((resolve, reject) => {
      try {
        const db = getDatabase();
        const postsRef = ref(db, "Psyhologists");
        const psychologistsPerPage = 3;
        const startIndex = currentPage * psychologistsPerPage;
        const endIndex = startIndex + psychologistsPerPage;
        const queryRef = query(
          postsRef,
          orderByKey(),
          startAt(String(startIndex)),
          endBefore(String(endIndex))
        );

        onValue(queryRef, (snapshot) => {
          const data = snapshot.val();
          const psychologistsData: PsychologistInter[] = data
            ? Object.values(data)
            : [];
          resolve({ data: psychologistsData });
        });
      } catch (error) {
        if (error instanceof Error) {
          toast.error(`${error.message}`);
        }
        reject(error);
      }
    });
  }
);
