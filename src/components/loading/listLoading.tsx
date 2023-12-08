import { Grid, Skeleton, useMediaQuery } from "@mui/material";
import { pageSize } from "../../constants/appConfig";

export function ListLoading() {
  const matches = useMediaQuery("(min-width:780px)");

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      padding={matches ? "1rem 5.625rem" : "1rem"}
    >
      {[...Array(pageSize).keys()].map((key) => (
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{ paddingTop: "0!important" }}
          key={`${key}+list-loading`}
        >
          <Skeleton sx={{ height: 60 }} />
        </Grid>
      ))}
    </Grid>
  );
}
