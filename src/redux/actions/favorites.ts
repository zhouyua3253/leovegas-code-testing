import { createAction } from "@reduxjs/toolkit";

const addToFavorites = createAction<{ id: number }>("favorites/AddToFavorites");
const removeFromFavorites = createAction<{ id: number }>(
  "favorites/removeFromFavorites"
);

export const favoriteActions = {
  addToFavorites,
  removeFromFavorites,
};
