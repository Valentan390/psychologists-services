import { createSlice } from "@reduxjs/toolkit";
import { fetchPsychologists } from "./operationsPsychologists";
import { PsychologistInter } from "../../helpers/InterfaceData";

interface PsychologistsState {
  psychologists: PsychologistInter[];
  isLoadingPsychologist: boolean;
  error: string | undefined;
  currentPage: number;
}

const psychologistsInitialState: PsychologistsState = {
  psychologists: [],
  isLoadingPsychologist: false,
  error: "",
  currentPage: 0,
};

const psychologistsSlice = createSlice({
  name: "psychologists",
  initialState: psychologistsInitialState,
  reducers: {
    setCurrentPage: (state) => {
      state.currentPage = state.currentPage + 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPsychologists.pending, (state) => {
        state.isLoadingPsychologist = true;
      })
      .addCase(fetchPsychologists.fulfilled, (state, action) => {
        state.isLoadingPsychologist = false;
        state.psychologists = [...state.psychologists, ...action.payload.data];
      })
      .addCase(fetchPsychologists.rejected, (state, action) => {
        state.isLoadingPsychologist = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage } = psychologistsSlice.actions;

export const psychologistsReduser = psychologistsSlice.reducer;
