import { RootState } from "../stor";

export const selectFavorite = (state: RootState) =>
  state.favorite.favoritesArray;
