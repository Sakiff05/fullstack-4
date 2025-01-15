import Add from "../pages/Add";
import Details from "../pages/Details";
import Favorite from "../pages/Favorite";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Root from "../pages/Root";

const ROUTES = [
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },

      {
        path: "favorite/details/:id",
        element: <Details />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
      {
        path: "favorite",
        element: <Favorite />,
      },
      {
        path: "add",
        element: <Add />,
      },
    ],
  },
];

export default ROUTES;
