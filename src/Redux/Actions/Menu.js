import * as typesMenuBar from "../../Constants/Menu";

export const toggle_menu_mobile = () => {
  return {
    type: typesMenuBar.TOGGLE_MENU_BAR,
  };
};

export const close_menu_mobile = () => {
  return {
    type: typesMenuBar.CLOSE_MENU_MOBILE,
  };
};

export const open_search_mobile = () => {
  return {
    type: typesMenuBar.OPEN_SEARCH_MOBILE,
  };
};
export const close_search_mobile = () => {
  return {
    type: typesMenuBar.CLOSE_SEARCH_MOBILE,
  };
};
