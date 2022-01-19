import React from "react";
import {
  ADD_FAVORITE,
  TOGGLE_FAVORITES,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }

    case TOGGLE_FAVORITES: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }

    case REMOVE_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default favoritesReducer;
