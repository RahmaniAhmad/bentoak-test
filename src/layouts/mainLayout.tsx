import { Stack } from "@mui/material";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Stack style={{ minHeight: "100vh" }}>
      <Stack px={{ xs: 2, md: 20 }}>{children}</Stack>
    </Stack>
  );
};

export default MainLayout;
