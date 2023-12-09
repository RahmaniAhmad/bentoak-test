import { useQuery } from "react-query";
import { getProducts } from "../../api";
import { IProduct } from "../../types";
import {
  IconButton,
  InputAdornment,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { ChangeEvent, useState } from "react";
import { pageSize } from "../../constants/appConfig";
import { useDebounce } from "use-debounce";
import { ListLoading } from "../../components/loading/listLoading";

export const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [debounceFilter] = useDebounce(filter, 500);

  const {
    data: products,
    error,
    isLoading,
  } = useQuery(["products", currentPage, debounceFilter], () =>
    getProducts(currentPage, debounceFilter)
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1);
    setFilter(event.target.value);
  };

  return (
    <Stack
      spacing={4}
      pt={4}
      alignItems="center"
      style={{ opacity: isLoading ? 0.5 : 1 }}
    >
      <TextField
        value={filter}
        fullWidth
        label="search"
        onChange={handleSearch}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {filter && (
                <IconButton onClick={() => setFilter("")}>
                  <Close />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Rating</TableCell>
              <TableCell align="right">brand</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={4}>
                  <ListLoading />
                </TableCell>
              </TableRow>
            )}
            {!isLoading &&
              products?.data.map((product: IProduct) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.title}
                  </TableCell>
                  <TableCell align="right">{product.price}</TableCell>
                  <TableCell align="right">{product.rating}</TableCell>
                  <TableCell align="right">{product.brand}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        page={currentPage}
        count={Math.ceil(products?.totalCount / pageSize)}
        variant="outlined"
        shape="rounded"
        onChange={handlePageChange}
      />
    </Stack>
  );
};
