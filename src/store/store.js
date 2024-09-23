import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./slice/authSlice";
import langSlice from "./slice/langSlice";

const persistConfig = {
  key: "root",
  storage,
};

const authReducer = persistReducer(persistConfig, authSlice);
const langReducer = persistReducer(persistConfig, langSlice);

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lang: langReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
