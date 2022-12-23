import { apiSlice } from '../apiSlice';

export const categorySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '/categories',
    }),
  }),
});

export const { useGetCategoriesQuery } = categorySlice;
