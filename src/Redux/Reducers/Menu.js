import * as typesMenuBar from "../../Constants/Menu";
const initialState = false;

const reducer = (state = initialState, action) => {
  if (action.type === typesMenuBar.TOGGLE_MENU_BAR) {
    return !state;
  }
  if (action.type === typesMenuBar.CLOSE_MENU_MOBILE) {
    return false;
  }
  if (action.type === typesMenuBar.SHOW_MENU_MOBILE) {
    return true;
  }
  return state;
};
export default reducer;
