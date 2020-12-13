import NotFound from "./Pages/NotFound/NotFound";
import HomeContainers from "./Containers/HomeContainers";
import MenShoesContainers from "./Containers/MenShoesContainers";
import WomonShoesContainers from "./Containers/WomonShoesContainers";
import SportShoesContainers from "./Containers/SportShoesContainers";
import ProductsCartContainers from "./Containers/ProductsCartContainers";
import ProductsDetailtContainers from "./Containers/ProductsDetailtContainers";
import ResultSearchContainers from "./Containers/ResultSearchContainers";
import NikeShoesContainer from "./Containers/NikeShoesContainer";
import AdidasContainers from "./Containers/AdidasContainers";
import LoginContainers from "./Containers/LoginContainers";
export const routers = [
  {
    component: () => <HomeContainers />,
    path: "/tigtig-shop-shoes",
    exact: true,
  },
  {
    component: () => <MenShoesContainers />,
    path: "/tigtig-shop-shoes/MenShoes",
    exact: false,
  },
  {
    component: () => <SportShoesContainers />,
    path: "/tigtig-shop-shoes/SportShoes",
    exact: false,
  },
  {
    component: () => <WomonShoesContainers />,
    path: "/tigtig-shop-shoes/WomonShoes",
    exact: false,
  },
  {
    component: () => <ProductsDetailtContainers />,
    path: "/tigtig-shop-shoes/products-detailt/:name",
    exact: false,
  },
  {
    component: () => <ProductsCartContainers />,
    path: "/tigtig-shop-shoes/products-cart",
    exact: false,
  },
  {
    component: () => <LoginContainers />,
    path: "/tigtig-shop-shoes/login",
    exact: false,
  },
  {
    component: () => <ResultSearchContainers />,
    path: "/tigtig-shop-shoes/result-search-products/:name",
    exact: false,
  },
  {
    component: () => <NikeShoesContainer />,
    path: "/tigtig-shop-shoes/nike",
    exact: false,
  },
  {
    component: () => <AdidasContainers />,
    path: "/tigtig-shop-shoes/adidas",
    exact: false,
  },
  {
    component: () => <NotFound />,
    path: "*",
    exact: false,
  },
];
