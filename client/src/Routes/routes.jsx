import Add from "../Pages/Add";
import DetailPage from "../Pages/DetailPage";
import EditPage from "../Pages/EditPage";
import Home from "../Pages/Home";
import MainRoot from "../Pages/MainRoot";

export const ROUTES = [
  {
    path: "",
    element: <MainRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/robots/:id",
        element:<DetailPage/>,
      },
      {
        path:'/robots/edit/:id',
        element: <EditPage/>
    },
    ],
  },
];
