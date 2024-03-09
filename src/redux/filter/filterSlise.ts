import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StyledOptionInter } from "../../helpers/InterfaceData";

interface FilterInitialState {
  selectFilter: string;
}

const filterInitialState: FilterInitialState = {
  selectFilter: "",
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
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReduser = filterSlice.reducer;
