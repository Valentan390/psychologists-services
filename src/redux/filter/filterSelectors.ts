import { RootState } from "../stor";

export const selectFilterValue = (state: RootState) =>
  state.filter.selectFilter;
