import { apiSlice } from './apiSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: { ...credentials },
      }),
    }),
    registerUser: builder.mutation({
      query: (credentials) => ({
        url: '/signup',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
