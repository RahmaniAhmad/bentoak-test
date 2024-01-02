import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

export const NotFound = () => {
  return (
    <Stack
      height="100vh"
      spacing={4}
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h4">Not Found</Typography>
      <h1>Oops! You seem to be lost.</h1>
      <Link to="/">Back to Dashboard</Link>
    </Stack>
  );
};
