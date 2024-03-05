import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthUserDataInter } from "../../helpers/InterfaceData";

const authUserInitialState: AuthUserDataInter = {
  name: "",
  email: "",
  token: "",
  id: "",
};

const authUserSlise = createSlice({
  name: "authUser",
  initialState: authUserInitialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthUserDataInter>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser: (state) => {
      state.name = "";
      state.email = "";
      state.token = "";
      state.id = "";
    },
  },
});

export const { setUser, removeUser } = authUserSlise.actions;

export const authUserReducer = authUserSlise.reducer;
