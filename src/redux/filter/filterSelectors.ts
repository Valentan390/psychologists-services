import { RootState } from "../stor";

export const selectFilterValue = (state: RootState) =>
  state.filter.selectFilter;

export const selectFavoriteFilter = (state: RootState) =>
  state.filter.selectFavoriteFilter;
