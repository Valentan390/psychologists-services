import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StyledOptionInter } from "../../helpers/InterfaceData";

interface FilterInitialState {
  selectFilter: string;
  selectFavoriteFilter: string;
}

const filterInitialState: FilterInitialState = {
  selectFilter: "",
  selectFavoriteFilter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setFilter: (state, action: PayloadAction<StyledOptionInter | null>) => {
      if (action.payload) {
        state.selectFilter = action.payload.value;
      }
    },

    setFavoriteFilter: (
      state,
      action: PayloadAction<StyledOptionInter | null>
    ) => {
      if (action.payload) {
        state.selectFavoriteFilter = action.payload.value;
      }
    },
  },
});

export const { setFilter, setFavoriteFilter } = filterSlice.actions;

export const filterReduser = filterSlice.reducer;
