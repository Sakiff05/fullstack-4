import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "counter",
  initialState: {
    favorite: JSON.parse(localStorage.getItem("favorite")) || [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorite.push(action.payload);
      localStorage.setItem("favorite", JSON.stringify(state.favorite));
    },
    removeFavorite: (state, action) => {
      let filteredData = state.favorite.filter(
        (data) => data._id != action.payload._id
      );
      state.favorite = [...filteredData];
      localStorage.setItem("favorite", JSON.stringify(state.favorite));
    },
  },
});

export const { addFavorite ,removeFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
