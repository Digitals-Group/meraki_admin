import { useQuery } from "react-query";
import { request } from "./http-client";

const productService = {
  getProducts: (queryParams) =>
    request.post("/get-list/products", {
      data: queryParams,
    }),
};

export const UseGetProducts = ({ queryParams }) => {
  return useQuery(["GET_PRODUCTS", queryParams], async () => {
    return await productService.getProducts(queryParams).then((res) => {
      return {
        data: res.data.data.response,
        count: res.data.data.count,
        fields: res.data.data.fields,
      };
    });
  });
};
