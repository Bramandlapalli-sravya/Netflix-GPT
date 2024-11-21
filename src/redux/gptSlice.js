import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "Search",
  initialState: {
    gptSearch: false,
    language: "en"
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.gptSearch = !state.gptSearch;
    },
    changeLanguage: (state, action) => {
      state.language = action.payload;
    }
  }
});

export const { toggleGPTSearchView, changeLanguage } = gptSlice.actions;
export default gptSlice.reducer;
