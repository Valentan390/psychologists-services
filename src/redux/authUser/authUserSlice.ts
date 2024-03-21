import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  refreshUser,
  logOutUser,
  signUpUser,
  sinInUser,
} from "./operationsAuthUser";
import { User } from "../../helpers/InterfaceData";

interface InitialState {
  user: User;
  isLoading: boolean;
  error: string | undefined;
}

const initialState: InitialState = {
  user: {
    email: "",
    id: "",
    token: "",
    name: "",
  },
  isLoading: false,
  error: "",
};

const handlePendingAction: CaseReducer<InitialState> = (state) => {
  state.isLoading = true;
};

const handleRejectedAction: CaseReducer<InitialState, any> = (
  state,
  action
) => {
  state.isLoading = false;
  state.error = action.error.message;
};

const authUserSlise = createSlice({
  name: "authUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(refreshUser.pending, handlePendingAction)
      .addCase(refreshUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(refreshUser.rejected, handleRejectedAction)

      .addCase(logOutUser.pending, handlePendingAction)
      .addCase(logOutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = initialState.user;
      })
      .addCase(logOutUser.rejected, handleRejectedAction)

      .addCase(signUpUser.pending, handlePendingAction)
      .addCase(signUpUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signUpUser.rejected, handleRejectedAction)

      .addCase(sinInUser.pending, handlePendingAction)
      .addCase(sinInUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(sinInUser.rejected, handleRejectedAction);
  },
});

export const authUserReducer = authUserSlise.reducer;
