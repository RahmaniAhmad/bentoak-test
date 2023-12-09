import { Route, Routes } from "react-router";
import { Dashboard, NotFound } from "../pages";
import MainLayout from "../layouts/mainLayout";

export const DashboardRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};
