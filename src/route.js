
import Home from "./pages/Home";
import { ListProduct } from "./pages/ListProduct/ListProduct";
import MenProduct from "./pages/MenProduct/MenProduct";
import DetailProduct from "./pages/DetailProduct/DetailProduct"
export const RouteHomePage = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/men",
        exact: false,
        component: MenProduct,
    },
    {
        path: "/listProduct",
        exact: false,
        component: ListProduct,
    },
    {
        path: "/detailProduct/:id",
        exact: false,
        component: DetailProduct,
    },
]