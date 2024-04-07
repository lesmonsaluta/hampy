import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SelectionState {
  selected: Array<string>;
  select_mode: boolean;
}

const initialState: SelectionState = {
  selected: [],
  select_mode: false,
};

const selectionSlice = createSlice({
  // this is the entire slice (or data/state that you're handling)
  name: "selection",

  // initial data you want
  initialState,

  // functions that can be done onto your data
  reducers: {
    flip: (state) => {
      console.log("flipping!")
      state.select_mode = !state.select_mode
    } ,
    append: (state, action: PayloadAction<string>) => {
      console.log("Adding the payload")
      state.selected.push(action.payload);
      console.log(state.selected)
    },
    remove: (state, action: PayloadAction<string>) => {
      console.log("Removing the payload")
      state.selected = state.selected.filter(toRemove => toRemove !== action.payload)
      console.log(state.selected)
    },
    clear: (state) => {
      console.log("Selected is cleared!")
      state.select_mode = false
      state.selected = []
      // location.reload()
    }
  }
});

// action is essentially the function
export const { append, remove, flip, clear } = selectionSlice.actions;

// reducer is essentially the function call or the function object
export default selectionSlice.reducer;

// these things are exported to the store, where the "instance" of redux is instantiated, and these "attributes" are set