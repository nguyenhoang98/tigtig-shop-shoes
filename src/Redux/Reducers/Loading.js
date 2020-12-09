import * as typesLoading from "../../Constants/Loading";

const initialState = false;

const reducer = (state = initialState, action) => {
  if (action.type === typesLoading.SHOW_BG_LOADING) {
    return true;
  }
  if (action.type === typesLoading.CLOSE_BG_LOADING) {
    return false;
  }
  return state;
};
export default reducer;
