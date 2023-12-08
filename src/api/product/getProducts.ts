import axios from "axios";
import { pageSize } from "../../constants/appConfig";

export const getProducts = async (currentPage: number = 1, filter?: string) => {
  if (filter) {
    const data = await axios
      .get(
        `https://dummyjson.com/products/search?q=${filter}&skip=${
          (currentPage - 1) * pageSize
        }&limit=${pageSize}`
      )
      .then((response) => {
        return response.data.products;
      });
    const totalCount = await axios
      .get(`https://dummyjson.com/products/search?q=${filter}`)
      .then((response) => {
        return response.data.products.length;
      });

    return { data: data, totalCount: totalCount };
  } else {
    const data = await axios
      .get(
        `https://dummyjson.com/products?skip=${
          (currentPage - 1) * pageSize
        }&limit=${pageSize}`
      )
      .then((response) => {
        return response.data.products;
      });
    const totalCount = await axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        return response.data.products.length;
      });

    return { data: data, totalCount: totalCount };
  }
};
