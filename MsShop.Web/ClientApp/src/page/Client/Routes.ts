import { IRouter } from "../../commons/modules";
import Home from "./Home";
import Product from "./Product";
export const ClientRoutes: IRouter[] = [
  {
    path: "/",
    name: "Trang chủ",
    exact: true,
    component: Home,
  },
  {
    path: "/product",
    name: "Trang sản phẩm",
    component: Product
  },
  
];
