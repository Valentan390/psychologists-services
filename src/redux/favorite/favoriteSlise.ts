import { CaseReducer, createSlice } from "@reduxjs/toolkit";
import {
  addFavoritePsychologist,
  removeFavoritePsychologist,
  fetchUserFavorites,
} from "./operations";
import { PsychologistInter } from "../../helpers/InterfaceData";

interface FavoriteState {
  favoritesArray: PsychologistInter[];
  loading: boolean;
  error: string | undefined;
}

const favoriteInitialState: FavoriteState = {
  favoritesArray: [],
  loading: false,
  error: "",
};

const handlePendingAction: CaseReducer<FavoriteState> = (state) => {
  state.loading = true;
  state.error = "";
};

const handleRejectedAction: CaseReducer<FavoriteState, any> = (
  state,
  action
) => {
  state.loading = false;
  state.error = action.payload?.message;
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: favoriteInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addFavoritePsychologist.pending, handlePendingAction)
      .addCase(addFavoritePsychologist.fulfilled, (state, action) => {
        state.loading = false;
        state.favoritesArray.push(action.payload);
      })
      .addCase(addFavoritePsychologist.rejected, handleRejectedAction)

      .addCase(removeFavoritePsychologist.pending, handlePendingAction)
      .addCase(removeFavoritePsychologist.fulfilled, (state, action) => {
        state.loading = false;
        state.favoritesArray = state.favoritesArray.filter(
          (psychologist) => psychologist.name !== action.payload.name
        );
      })
      .addCase(removeFavoritePsychologist.rejected, handleRejectedAction)

      .addCase(fetchUserFavorites.pending, handlePendingAction)
      .addCase(fetchUserFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.favoritesArray = action.payload.data;
      })
      .addCase(fetchUserFavorites.rejected, handleRejectedAction);
  },
});

export const favoriteReduser = favoriteSlice.reducer;
