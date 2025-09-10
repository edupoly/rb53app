import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "../services/todosapi";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
setupListeners(store.dispatch);
