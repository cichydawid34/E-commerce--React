import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../redux/apiSlice";
import  userReducer  from "../redux/userSlice";
export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    user: userReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch