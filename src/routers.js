import NotFound from "./Pages/NotFound/NotFound";
import HomeContainers from "./Containers/HomeContainers";
import MenShoesContainers from "./Containers/MenShoesContainers";
import WomonShoesContainers from "./Containers/WomonShoesContainers";
import SportShoesContainers from "./Containers/SportShoesContainers";
import ProductsCartContainers from "./Containers/ProductsCartContainers";
import ProductsDetailtContainers from "./Containers/ProductsDetailtContainers";
import ResultSearchContainers from "./Containers/ResultSearchContainers";
import SearchMobileContainers from "./Containers/SearchMobileContainers";
const routers = [
  {
    component: () => <HomeContainers />,
    path: "/",
    exact: true,
  },
  {
    component: () => <MenShoesContainers />,
    path: "/MenShoes",
    exact: false,
  },
  {
    component: () => <SportShoesContainers />,
    path: "/SportShoes",
    exact: false,
  },
  {
    component: () => <WomonShoesContainers />,
    path: "/WomonShoes",
    exact: false,
  },
  {
    component: () => <ProductsDetailtContainers />,
    path: "/products-detailt/:name",
    exact: false,
  },
  {
    component: () => <ProductsCartContainers />,
    path: "/products-cart",
    exact: false,
  },
  {
    component: () => <ResultSearchContainers />,
    path: "/result-search-products/:name",
    exact: false,
  },
  {
    component: () => <NotFound />,
    path: "*",
    exact: false,
  },
];

export default routers;
