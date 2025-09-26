import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/userApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "../features/customers/userSlice";

export const store = configureStore({
  reducer: {
    usrR: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
setupListeners(store.dispatch);
