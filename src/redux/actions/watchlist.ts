import { createAction } from "@reduxjs/toolkit";

const addToWatchlist = createAction<{ id: number }>("watchlist/addToWatchlist");
const removeFromWatchlist = createAction<{ id: number }>(
  "watchlist/removeFromWatchlist"
);

export const watchlistActions = {
  addToWatchlist,
  removeFromWatchlist,
};
