import * as typesLoading from "../..//Constants/Loading";

export const show_bg_loading = () => {
  return {
    type: typesLoading.SHOW_BG_LOADING,
  };
};
export const close_bg_loading = () => {
  return {
    type: typesLoading.CLOSE_BG_LOADING,
  };
};
