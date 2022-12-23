import { apiSlice } from '../apiSlice';

export const addProductSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (body) => ({
        url: '/products',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body,
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const { useAddProductMutation } = addProductSlice;
