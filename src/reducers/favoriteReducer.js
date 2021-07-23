import { ADD_FAVORITE, TOGGLE_FAVORITE } from "../actions/favoriteActions";

const intialState = {
  favorites: [],
  displayFavorites: false,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case TOGGLE_FAVORITE:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };

    default:
      return state;
  }
};

export default reducer;
