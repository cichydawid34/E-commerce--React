import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi: any = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getProductsCategory: builder.query({
      query: (category: string) => `products/category/${category}`,
    }),
    getProduct: builder.query({
      query: (id: number) => `product/${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductsCategoryQuery,
  useGetProductQuery,
} = productsApi;
