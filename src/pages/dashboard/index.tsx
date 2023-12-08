import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { Charts } from "../charts";
import { Products } from "../products";

export const Dashboard = () => {
  const [value, setValue] = useState("charts");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="charts" label="Charts" />
        <Tab value="products" label="Products" />
      </Tabs>
      {value === "charts" && <Charts />}
      {value === "products" && <Products />}
    </Box>
  );
};
