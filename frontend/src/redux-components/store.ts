import { configureStore } from "@reduxjs/toolkit";
import hamperSelectionReducer from "./hamperSelectionSlice";
import closetSelectionReducer from "./closetSelectionSlice"

// this store is being provided to the main app
export const store = configureStore({
  reducer: {
    hamperSelection: hamperSelectionReducer,
    closetSelection: closetSelectionReducer,
  },
});

// i mean literally the root state
export type RootState = ReturnType<typeof store.getState>;

// dispatch allows for function calls
export type AppDispatch = typeof store.dispatch;