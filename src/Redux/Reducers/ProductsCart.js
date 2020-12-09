import * as typesProducts from "../../Constants/Products";
const data = JSON.parse(localStorage.getItem("shop-products-hook"));
const initialState = data ? data : [];

const reducer = (state = initialState, action) => {
  if (action.type === typesProducts.ADD_TO_CART_SUCCESS) {
    const { data, quantity } = action.payload;
    let index = state.findIndex((value) => {
      return value.products.id === data.id;
    });
    if (index !== -1) {
      state[index].quantity += quantity;
    } else {
      state.push({
        products: data,
        quantity: quantity,
      });
    }
    localStorage.setItem("shop-products-hook", JSON.stringify(state));
    return [...state];
  }
  if (action.type === typesProducts.ADD_TO_CART_ERR) {
  }
  if (action.type === typesProducts.UPDATE_TO_CART_SUCCESS) {
    const { id, count } = action.payload;
    let index = state.findIndex((value) => {
      return value.products.id === id;
    });
    if (state[index].quantity === 0) {
      state.splice(index, 1);
    } else {
      state[index].quantity += count;
    }
    localStorage.setItem("shop-products-hook", JSON.stringify(state));
    return [...state];
  }
  if (action.type === typesProducts.UPDATE_TO_CART_ERR) {
  }
  if (action.type === typesProducts.DELETE_PRODUCTS_CART_SUCCESS) {
    const { id } = action.payload;
    let index = state.findIndex((value) => {
      return value.products.id === id;
    });
    state.splice(index, 1);
    return [...state];
  }
  if (action.type === typesProducts.DELETE_PRODUCTS_CART_ERR) {
  }
  return state;
};
export default reducer;
