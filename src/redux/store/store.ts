import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@Reducers";
import { logger } from "redux-logger";

/**
 * Configure store
 *
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#configurestore
 */
function makeStore() {
  return configureStore({
    /**
     * A single reducer function that will be used as the root reducer, or an
     * object of slice reducers that will be passed to `combineReducers()`.
     */
    reducer: rootReducer,

    /**
     * An array of Redux middleware to install. If not supplied, defaults to
     * the set of middleware returned by `getDefaultMiddleware()`.
     */
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

    /**
     * Enable support for DevTools Extension in all environments except
     * production.
     */
    devTools: process.env.NODE_ENV !== "production",
  });
}

const store = makeStore();

export default store;
