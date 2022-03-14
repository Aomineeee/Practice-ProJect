import { SET_LIST_FILM } from "../constants/film";

export const initialState = {
  listFilm: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_FILM:
      state.listFilm = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
