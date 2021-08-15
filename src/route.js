import ImageShoe from "./components/InfoImg/ImageShoe";
import Home from "./pages/Home";

export const RouteHomePage = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/listShoes",
        exact: false,
        component: ImageShoe,
    },
]