import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/data";

const initialState = {
  clothes: data,
  selectedCategory: "all",
};

export const clothesSlice = createSlice({
  name: "clothes",
  initialState,
  reducers: {
    filterClothes: (state, action) => { 
        state.selectedCategory = action.payload;
      if (action.payload === "all") {
        state.clothes = data;
      } else {
        state.clothes = data.filter((item) => item.searchTerm === action.payload)}}
  },
});

export const { filterClothes } = clothesSlice.actions;
export default clothesSlice.reducer;
