import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useDebounce } from "use-debounce";
import { getProducts } from "../../../api";

export function useData() {
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
  return {
    products,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
    isLoading,
  };
}
