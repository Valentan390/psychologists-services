import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./modal/modalSlice";
import { authUserReducer } from "./authUser/authUserSlice";

export const store = configureStore({
  reducer: {
    modalInfo: modalReducer,
    user: authUserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
