import { combineReducers } from "@reduxjs/toolkit";
import favorites from "./favorites";
import watchlist from "./watchlist";

const rootReducer = combineReducers({ favorites, watchlist });

export default rootReducer;
