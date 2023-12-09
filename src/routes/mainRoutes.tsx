import { Route, Routes } from "react-router";
import { Login, NotFound, Register } from "../pages";
import { DASHBOARD, LOGIN, REGISTER } from "../constants/urls";
import { DashboardRoutes } from "./dashboardRoutes";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={REGISTER} element={<Register />} />
      <Route path={DASHBOARD} element={<DashboardRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
