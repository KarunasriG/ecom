import { createSlice } from "@reduxjs/toolkit";

const favoriteItemsSlice = createSlice({
  name: "favoriteItems",
  initialState: {
    items: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } =
  favoriteItemsSlice.actions;
export default favoriteItemsSlice.reducer;
