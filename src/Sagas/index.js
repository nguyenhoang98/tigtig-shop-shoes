import * as types from "../Constants/index";
import * as typesProducts from "../Constants/Products";
import { call, fork, put, take, takeLatest, delay } from "redux-saga/effects";
import { getData } from "../Apis";
import {
  fetch_api_home_slide_err,
  fetch_api_home_slide_success,
  fetch_api_home_products_success,
  fetch_api_home_products_err,
  fetch_api_shoes_men_success,
  fetch_api_shoes_men_err,
  fetch_api_shoes_womon_success,
  fetch_api_shoes_womon_err,
  fetch_api_shoes_sport_success,
  fetch_api_shoes_sport_err,
  fetch_api_search_products_success,
  fetch_api_search_products_err,
  fetch_api_nike_page_success,
  fetch_api_nike_page_err,
  fetch_api_adidas_page_success,
  fetch_api_adidas_page_err,
} from "../Redux/Actions/Actions";
import {
  add_to_cart_err,
  add_to_cart_success,
  delete_product_cart_err,
  delete_product_cart_success,
  update_to_cart_err,
  update_to_cart_success,
} from "../Redux/Actions/ProductsCartAction";
import { close_bg_loading, show_bg_loading } from "../Redux/Actions/Loading";
const url_slide = "https://0yd7f.sse.codesandbox.io/slide";
const url_home_products = "https://0yd7f.sse.codesandbox.io/HomeProducts";
function* watchApihomeSlideSaga() {
  while (true) {
    yield take(types.FETCH_API_HOME_SLIDE);
    const result = yield call(getData, url_slide);
    if (result.status === 200) {
      yield put(fetch_api_home_slide_success(result.data));
    } else {
      yield put(fetch_api_home_slide_err("404-error"));
    }
    yield delay(500);
    yield put(close_bg_loading());
  }
}

function* watchApiHomeProductsSagas() {
  while (true) {
    yield take(types.FETCH_API_HOME_PRODUCTS);
    yield put(show_bg_loading());
    const result = yield call(getData, url_home_products);
    if (result.status === 200) {
      yield put(fetch_api_home_products_success(result.data));
    } else {
      yield put(fetch_api_home_products_err("404-error"));
    }
    yield delay(500);
    yield put(close_bg_loading());
  }
}

function* watchApiShoesMenSagas() {
  while (true) {
    const result = yield take(types.FETCH_API_SHOES_MEN);
    yield put(show_bg_loading());
    const { url } = result.payload;
    const response = yield call(getData, url);
    if (response.status === 200) {
      yield put(fetch_api_shoes_men_success(response.data));
    } else {
      yield put(fetch_api_shoes_men_err("404-Error"));
    }
    yield delay(500);
    yield put(close_bg_loading());
  }
}
function* watchApiShoesWomonSagas() {
  while (true) {
    const result = yield take(types.FETCH_API_SHOES_WOMON);
    yield put(show_bg_loading());
    const { url } = result.payload;
    const response = yield call(getData, url);
    if (response.status === 200) {
      yield put(fetch_api_shoes_womon_success(response.data));
    } else {
      yield put(fetch_api_shoes_womon_err("404-Error"));
    }
    yield delay(500);
    yield put(close_bg_loading());
  }
}
function* watchApiShoesSportSagas() {
  while (true) {
    const result = yield take(types.FETCH_API_SHOES_SPORT);
    yield put(show_bg_loading());
    const { url } = result.payload;
    const response = yield call(getData, url);
    if (response.status === 200) {
      yield put(fetch_api_shoes_sport_success(response.data));
    } else {
      yield put(fetch_api_shoes_sport_err("404-Error"));
    }
    yield delay(500);
    yield put(close_bg_loading());
  }
}
function* watchAddProductToCartSagas(data) {
  const { product, quantity } = data.payload;
  yield put(show_bg_loading());
  if ((product, quantity)) {
    yield put(add_to_cart_success(product, quantity));
  } else {
    yield put(add_to_cart_err("404 - Lỗi không sản phẩm vào giỏi hàng được"));
  }
  yield delay(500);
  yield put(close_bg_loading());
}
function* watchUpdateToCartSagas(data) {
  const { id, count } = data.payload;
  if (data) {
    yield put(update_to_cart_success(id, count));
  } else {
    yield put(update_to_cart_err("404 - Lỗi Không Cập Nhật Được"));
  }
}
function* watchDeleteCartSagas(data) {
  const { id } = data.payload;
  if (id) {
    yield put(delete_product_cart_success(id));
  } else {
    yield put(
      delete_product_cart_err(
        "404 - Lỗi Không Bỏ Sản Phẩm ra Khỏi Giỏ Hàng Được"
      )
    );
  }
}

function* wacchApiSearchProducts() {
  while (true) {
    const result = yield take(types.FETCH_API_SEARCH_PRODUCTS);
    yield put(show_bg_loading());
    const { url } = result.payload;
    const response = yield call(getData, url);
    if (response.status) {
      yield put(fetch_api_search_products_success(response.data));
    } else {
      yield put(fetch_api_search_products_err("404- Lỗi "));
    }
    yield delay(500);
    yield put(close_bg_loading());
  }
}
function* watchApiNikePageSagas() {
  while (true) {
    const result = yield take(types.FETCH_API_NIKE_PAGE);
    const { url } = result.payload;
    const response = yield call(getData, url);
    if (response.status === 200) {
      yield put(fetch_api_nike_page_success(response.data));
    } else {
      yield put(fetch_api_nike_page_err("404-Lỗi"));
    }
  }
}
function* watchApiAdidasPageSagas() {
  while (true) {
    const result = yield take(types.FETCH_API_ADIDAS_PAGE);
    const { url } = result.payload;
    const response = yield call(getData, url);
    if (response.status === 200) {
      yield put(fetch_api_adidas_page_success(response.data));
    } else {
      yield put(fetch_api_adidas_page_err("404-Lỗi"));
    }
  }
}
function* rootSaga() {
  yield fork(watchApihomeSlideSaga);
  yield fork(watchApiHomeProductsSagas);
  yield fork(watchApiShoesMenSagas);
  yield fork(watchApiShoesWomonSagas);
  yield fork(watchApiShoesSportSagas);
  yield takeLatest(typesProducts.ADD_TO_CART, watchAddProductToCartSagas);
  yield takeLatest(typesProducts.UPDATE_TO_CART, watchUpdateToCartSagas);
  yield takeLatest(typesProducts.DELETE_PRODUCTS_CART, watchDeleteCartSagas);
  yield fork(wacchApiSearchProducts);
  yield fork(watchApiNikePageSagas);
  yield fork(watchApiAdidasPageSagas);
}
export default rootSaga;
