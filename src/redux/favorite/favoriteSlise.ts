import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PsychologistInter } from "../../helpers/InterfaceData";

interface FavoriteState {
  favoritesArray: PsychologistInter[];
}

const favoriteInitialState: FavoriteState = {
  favoritesArray: [],
};

const favoriteSlise = createSlice({
  name: "favorite",
  initialState: favoriteInitialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<PsychologistInter>) => {
      state.favoritesArray.push(action.payload);
    },
    removeFavorites: (state, action: PayloadAction<{ name: string }>) => {
      state.favoritesArray = state.favoritesArray.filter(
        (favorite) => favorite.name !== action.payload.name
      );
    },
  },
});

export const { addFavorites, removeFavorites } = favoriteSlise.actions;

export const favoriteReduser = favoriteSlise.reducer;
