import { Logout } from "@mui/icons-material";
import { Divider, IconButton, Stack, Typography } from "@mui/material";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {
  children?: ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  useEffect(() => {
    if (!username) {
      navigate("/");
    }
  }, [navigate, username]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };
  return (
    <Stack style={{ minHeight: "100vh" }}>
      <Stack
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "blue",
          opacity: 0.8,
          zIndex: 10,
          padding: 10,
        }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        height={60}
      >
        <Typography>BentOak Test</Typography>
        <Typography>{`Wolcome ${localStorage.getItem("username")}`}</Typography>
        <IconButton onClick={handleLogout}>
          <Logout />
        </IconButton>
      </Stack>
      <Divider />
      <Stack px={{ xs: 2, md: 20 }}>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default MainLayout;
