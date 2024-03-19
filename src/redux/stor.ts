import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./modal/modalSlice";
import { authUserReducer } from "./authUser/authUserSlice";
import { favoriteReduser } from "./favorite/favoriteSlise";
import { filterReduser } from "./filter/filterSlise";
import { psychologistsReduser } from "./psyhologists/psyhologistsSlice";

export const store = configureStore({
  reducer: {
    modalInfo: modalReducer,
    user: authUserReducer,
    psychologists: psychologistsReduser,
    favorite: favoriteReduser,
    filter: filterReduser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
