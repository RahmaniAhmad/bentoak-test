import { Stack } from "@mui/material";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return <Stack style={{ minHeight: "100vh" }}>{children}</Stack>;
};

export default MainLayout;
