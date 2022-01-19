import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  movieState: movieReducer,
  favoriteState: favoritesReducer,
});

export default movieReducer;
