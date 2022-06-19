import { createReducer } from "@reduxjs/toolkit";
import { favoriteActions } from "@Actions";

export interface FavoritesReducerState {
  movies: Array<number>;
}

const initialState: FavoritesReducerState = {
  movies: [],
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(favoriteActions.addToFavorites, (state, action) => {
      const movieId = action.payload.id;
      const movies = [...state.movies, movieId];

      return {
        ...state,
        movies,
      };
    })
    .addCase(favoriteActions.removeFromFavorites, (state, action) => {
      const movieId = action.payload.id;
      const movies = state.movies.filter((movie) => movie !== movieId);

      return {
        ...state,
        movies,
      };
    });
});
