import * as types from "../../Constants/index";

export const fetch_api_home_slide = () => {
  return {
    type: types.FETCH_API_HOME_SLIDE,
  };
};

export const fetch_api_home_slide_success = (data) => {
  return {
    type: types.FETCH_API_HOME_SLIDE_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const fetch_api_home_slide_err = (err) => {
  return {
    type: types.FETCH_API_HOME_SLIDE_ERR,
    payload: {
      err: err,
    },
  };
};
//
export const fetch_api_home_products = () => {
  return {
    type: types.FETCH_API_HOME_PRODUCTS,
  };
};
export const fetch_api_home_products_success = (data) => {
  return {
    type: types.FETCH_API_HOME_PRODUCTS_SUCCESS,
    payload: {
      data: data,
    },
  };
};
export const fetch_api_home_products_err = (err) => {
  return {
    type: types.FETCH_API_HOME_PRODUCTS_ERR,
    payload: {
      err: err,
    },
  };
};
//
export const fetch_api_shoes_men = (url) => {
  return {
    type: types.FETCH_API_SHOES_MEN,
    payload: {
      url: url,
    },
  };
};
export const fetch_api_shoes_men_success = (data) => {
  return {
    type: types.FETCH_API_SHOES_MEN_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const fetch_api_shoes_men_err = (err) => {
  return {
    type: types.FETCH_API_SHOES_MEN_ERR,
    payload: {
      err: err,
    },
  };
};
//
export const fetch_api_shoes_womon = (url) => {
  return {
    type: types.FETCH_API_SHOES_WOMON,
    payload: {
      url: url,
    },
  };
};
export const fetch_api_shoes_womon_success = (data) => {
  return {
    type: types.FETCH_API_SHOES_WOMON_SUCCESS,
    payload: {
      data: data,
    },
  };
};
export const fetch_api_shoes_womon_err = (err) => {
  return {
    type: types.FETCH_API_SHOES_WOMON_ERR,
    payload: {
      err: err,
    },
  };
};
//
export const fetch_api_shoes_sport = (url) => {
  return {
    type: types.FETCH_API_SHOES_SPORT,
    payload: {
      url: url,
    },
  };
};
export const fetch_api_shoes_sport_success = (data) => {
  return {
    type: types.FETCH_API_SHOES_SPORT_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const fetch_api_shoes_sport_err = (err) => {
  return {
    type: types.FETCH_API_SHOES_SPORT_ERR,
    payload: {
      err: err,
    },
  };
};

//

export const fetch_api_search_products = (url) => {
  return {
    type: types.FETCH_API_SEARCH_PRODUCTS,
    payload: {
      url: url,
    },
  };
};
export const fetch_api_search_products_success = (data) => {
  return {
    type: types.FETCH_API_SEARCH_PRODUCTS_SUCCESS,
    payload: {
      data: data,
    },
  };
};
export const fetch_api_search_products_err = (err) => {
  return {
    type: types.FETCH_API_SEARCH_PRODUCTS,
    payload: {
      err: err,
    },
  };
};
