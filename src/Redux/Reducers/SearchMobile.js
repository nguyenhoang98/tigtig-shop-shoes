import * as typesMenuBar from "../../Constants/Menu";

const initialState = false;
const reducer = (state = initialState, action) => {
  if (action.type === typesMenuBar.OPEN_SEARCH_MOBILE) {
    return true;
  }
  if (action.type === typesMenuBar.CLOSE_SEARCH_MOBILE) {
    return false;
  }
  return state;
};
export default reducer;
