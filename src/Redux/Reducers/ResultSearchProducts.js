import * as types from "../../Constants/index";

const initialState = [];
const reducer = (state = initialState, action) => {
  if (action.type === types.FETCH_API_SEARCH_PRODUCTS_SUCCESS) {
    const { data } = action.payload;
    state = data;
    return [...state];
  }
  if (action.type === types.FETCH_API_SEARCH_PRODUCTS_ERR) {
  }
  return state;
};
export default reducer;
