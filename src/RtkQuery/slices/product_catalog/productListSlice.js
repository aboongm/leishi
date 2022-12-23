import { apiSlice } from '../apiSlice';

export const productListSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
  }),
});

export const { useGetProductsQuery } = productListSlice;
