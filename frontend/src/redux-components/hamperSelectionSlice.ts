import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SelectionState {
  hamperSelected: Array<string>;
  hamperSelect_mode: boolean;
}

const initialState: SelectionState = {
  hamperSelected: [],
  hamperSelect_mode: false,
};

const hamperSelectionSlice = createSlice({
  // this is the entire slice (or data/state that you're handling)
  name: "hamperSelection",

  // initial data you want
  initialState,

  // functions that can be done onto your data
  reducers: {
    hamperFlip: (state) => {
      console.log("flipping!")
      state.hamperSelect_mode = !state.hamperSelect_mode
    } ,
    hamperAppend: (state, action: PayloadAction<string>) => {
      console.log("Adding the payload")
      state.hamperSelected.push(action.payload);
      console.log(state.hamperSelected)
    },
    hamperRemove: (state, action: PayloadAction<string>) => {
      console.log("Removing the payload")
      state.hamperSelected = state.hamperSelected.filter(toRemove => toRemove !== action.payload)
      console.log(state.hamperSelected)
    },
    hamperClear: (state) => {
      console.log("Selected is cleared!")
      state.hamperSelect_mode = false
      state.hamperSelected = []
      // location.reload()
    }
  }
});

// action is essentially the function
export const { hamperAppend, hamperRemove, hamperFlip, hamperClear } = hamperSelectionSlice.actions;

// reducer is essentially the function call or the function object
export default hamperSelectionSlice.reducer;

// these things are exported to the store, where the "instance" of redux is instantiated, and these "attributes" are set