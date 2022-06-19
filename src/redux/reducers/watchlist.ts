import { createReducer } from "@reduxjs/toolkit";
import { watchlistActions } from "@Actions";

export interface WatchlistReducerState {
  movies: Array<number>;
}

const initialState: WatchlistReducerState = {
  movies: [],
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(watchlistActions.addToWatchlist, (state, action) => {
      const movieId = action.payload.id;
      const movies = [...state.movies, movieId];

      return {
        ...state,
        movies,
      };
    })
    .addCase(watchlistActions.removeFromWatchlist, (state, action) => {
      const movieId = action.payload.id;
      const movies = state.movies.filter((movie) => movie !== movieId);

      return {
        ...state,
        movies,
      };
    });
});
