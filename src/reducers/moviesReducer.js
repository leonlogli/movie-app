import { SEARCH_MOVIES_SUCCESS } from "../constants";

const initialState = {
  movies: [],
  searchText: ''
}

export default (state = initialState, action) => {
  if (action.type === SEARCH_MOVIES_SUCCESS) {
    state = action.payload;
  }

  return state;
}