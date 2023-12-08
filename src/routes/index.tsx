import { Route, Routes } from "react-router";
import { Dashboard, Login, NotFound, Register } from "../pages";
import MainLayout from "../layouts/mainLayout";
import { DASHBOARD, LOGIN, REGISTER } from "../constants/urls";

export const MainRouts = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path={DASHBOARD} element={<Dashboard />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={REGISTER} element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};
