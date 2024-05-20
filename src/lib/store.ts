import { configureStore } from "@reduxjs/toolkit";
import { shippingProductApi } from "./services/shopping-basked";
export const makeStore = () => {
  return configureStore({
    reducer: {
      [shippingProductApi.reducerPath]: shippingProductApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(shippingProductApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
