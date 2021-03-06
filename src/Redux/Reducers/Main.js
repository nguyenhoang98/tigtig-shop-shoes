import { combineReducers } from "redux";
import HomeSlide from "./HomeSlide";
import HomeProducts from "./HomeProducts";
import ShoesMen from "./ShoesMen";
import ShoesWomon from "./ShoesWomon";
import ShoesSport from "./ShoesSport";
import ProductsCart from "./ProductsCart";
import Loading from "./Loading";
import Menu from "./Menu";
import ResultSearchProducts from "./ResultSearchProducts";
import SearchMobile from "./SearchMobile";
import NikeData from "./Nike";
import AdidasData from "./Adidas";
const appReducers = combineReducers({
  HomeSlide: HomeSlide,
  HomeProducts: HomeProducts,
  ShoesMen: ShoesMen,
  ShoesWomon: ShoesWomon,
  ShoesSport: ShoesSport,
  ProductsCart: ProductsCart,
  Loading: Loading,
  Menu: Menu,
  ResultSearchProducts: ResultSearchProducts,
  SearchMobile: SearchMobile,
  NikeData: NikeData,
  AdidasData: AdidasData,
});
export default appReducers;
