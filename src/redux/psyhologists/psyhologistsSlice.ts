import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PsychologistInter } from "../../helpers/InterfaceData";
import { PsychologistsStateinter } from "../../helpers/InterfaceData";

const psyhologistsInitialState: PsychologistsStateinter = {
  psychologists: [],
};

const psyhologistsSlice = createSlice({
  name: "psychologists",
  initialState: psyhologistsInitialState,
  reducers: {
    setPsychologists: (state, action: PayloadAction<PsychologistInter[]>) => {
      state.psychologists = action.payload;
    },
  },
});

export const { setPsychologists } = psyhologistsSlice.actions;

export const psychologistsReduser = psyhologistsSlice.reducer;
