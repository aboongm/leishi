import { apiSlice } from '../apiSlice';

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addOrders: builder.mutation({
      query: (body) => ({
        url: '/orders',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body,
      }),
      invalidatesTags: ['Order'],
    }),
    getOrders: builder.query({
      query: () => '/orders',
      providesTags: ['Order'],
    }),
  }),
});

export const { useAddOrdersMutation, useGetOrdersQuery } = orderApiSlice;
