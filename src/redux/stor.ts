import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./modal/modalSlice";
import { authUserReducer } from "./authUser/authUserSlice";
import { favoriteReduser } from "./favorite/favoriteSlise";
import { filterReduser } from "./filter/filterSlise";
import { psychologistsReduser } from "./psyhologists/psyhologistsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const favoritePersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favoritesArray"],
};

const persistedUserReducer = persistReducer(
  favoritePersistConfig,
  favoriteReduser
);

export const store = configureStore({
  reducer: {
    modalInfo: modalReducer,
    user: authUserReducer,
    psychologists: psychologistsReduser,
    favorite: persistedUserReducer,
    filter: filterReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
