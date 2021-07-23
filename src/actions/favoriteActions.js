export const ADD_FAVORITE = "ADD_FAVORITE";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const addFavorite = (movie) => {
  return { type: ADD_FAVORITE, payload: movie };
};

export const toggleFavorite = () => {
  return { type: TOGGLE_FAVORITE };
};
