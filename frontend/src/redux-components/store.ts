import { configureStore } from "@reduxjs/toolkit";
import selectionReducer from "./selectionSlice";

// this store is being provided to the main app
export const store = configureStore({
  reducer: {
    counter: selectionReducer,
  },
});

// i mean literally the root state
export type RootState = ReturnType<typeof store.getState>;

// dispatch allows for function calls
export type AppDispatch = typeof store.dispatch;