import { Dashboard, Login, NotFound, Register } from "../pages";
import { DASHBOARD, LOGIN, REGISTER } from "../constants/urls";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";

export const Router = () => {
  const element = useRoutes([
    { path: "/", element: <Login /> },
    { path: LOGIN, element: <Login /> },
    { path: REGISTER, element: <Register /> },
    {
      element: <MainLayout />,
      children: [
        {
          path: DASHBOARD,
          element: <Dashboard />,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
  return element;
};
