import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PATHS } from "./consts";
import { Admin } from "../pages/Admin/Admin";
import { RootLayout } from "./RootLayout";
import { Home } from "../pages/Home/Home";

const getRouter = () =>
  createBrowserRouter([
    {
      path: PATHS.HOME,
      element: <RootLayout />,
      //   errorElement: <ErrorPage />,
      children: [
        {
          path: PATHS.HOME,
          element: <Home />,
        },
        {
          path: PATHS.ADMIN.ROOT,
          element: <Admin />,
        },
      ],
    },
  ]);

export const Router = () => {
  //   const { isLoggedIn } = useContext(UserContext);
  //   useAxiosErrorHandler();

  return <RouterProvider router={getRouter()} />;
};
