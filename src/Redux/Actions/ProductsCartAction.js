import * as typesProducts from "../../Constants/Products";
export const add_to_cart = (product, quantity) => {
  return {
    type: typesProducts.ADD_TO_CART,
    payload: {
      product: product,
      quantity: quantity,
    },
  };
};
export const add_to_cart_success = (data, quantity) => {
  return {
    type: typesProducts.ADD_TO_CART_SUCCESS,
    payload: {
      data: data,
      quantity: quantity,
    },
  };
};

export const add_to_cart_err = (err) => {
  return {
    type: typesProducts.ADD_TO_CART_ERR,
    payload: {
      err: err,
    },
  };
};

export const update_to_cart = (id, count) => {
  return {
    type: typesProducts.UPDATE_TO_CART,
    payload: {
      id: id,
      count: count,
    },
  };
};
export const update_to_cart_success = (id, count) => {
  return {
    type: typesProducts.UPDATE_TO_CART_SUCCESS,
    payload: {
      id: id,
      count: count,
    },
  };
};

export const update_to_cart_err = (err) => {
  return {
    type: typesProducts.UPDATE_TO_CART_ERR,
    payload: {
      err: err,
    },
  };
};

export const delete_product_cart = (id) => {
  return {
    type: typesProducts.DELETE_PRODUCTS_CART,
    payload: {
      id: id,
    },
  };
};

export const delete_product_cart_success = (id) => {
  return {
    type: typesProducts.DELETE_PRODUCTS_CART_SUCCESS,
    payload: {
      id: id,
    },
  };
};

export const delete_product_cart_err = (err) => {
  return {
    type: typesProducts.DELETE_PRODUCTS_CART_ERR,
    payload: {
      err: err,
    },
  };
};
