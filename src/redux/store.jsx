import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartSlice";
import favoriteItemsReducer from "../slice/favoriteItemsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favoriteItems: favoriteItemsReducer,
  },
});

export default store;
