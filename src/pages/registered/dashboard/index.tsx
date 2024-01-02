import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { Charts } from "../charts";
import { Products } from "../products";

export const Dashboard = () => {
  const [value, setValue] = useState("products");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", paddingTop: 2 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="products" label="Products" />
        <Tab value="charts" label="Charts" />
      </Tabs>
      {value === "products" && <Products />}
      {value === "charts" && <Charts />}
    </Box>
  );
};
