import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SelectionState {
  closetSelected: Array<string>;
  closetSelect_mode: boolean;
}

const initialState: SelectionState = {
  closetSelected: [],
  closetSelect_mode: false,
};

const closetSelectionSlice = createSlice({
  // this is the entire slice (or data/state that you're handling)
  name: "closetSelection",

  // initial data you want
  initialState,

  // functions that can be done onto your data
  reducers: {
    closetFlip: (state) => {
      console.log("flipping!")
      state.closetSelect_mode = !state.closetSelect_mode
    } ,
    closetAppend: (state, action: PayloadAction<string>) => {
      console.log("Adding the payload")
      state.closetSelected.push(action.payload);
      console.log(state.closetSelected)
    },
    closetRemove: (state, action: PayloadAction<string>) => {
      console.log("Removing the payload")
      state.closetSelected = state.closetSelected.filter(toRemove => toRemove !== action.payload)
      console.log(state.closetSelected)
    },
    closetClear: (state) => {
      console.log("Selected is cleared!")
      state.closetSelect_mode = false
      state.closetSelected = []
      // location.reload()
    }
  }
});

// action is essentially the function
export const { closetAppend, closetRemove, closetFlip, closetClear } = closetSelectionSlice.actions;

// reducer is essentially the function call or the function object
export default closetSelectionSlice.reducer;

// these things are exported to the store, where the "instance" of redux is instantiated, and these "attributes" are set