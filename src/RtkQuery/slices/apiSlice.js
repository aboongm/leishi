import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    // baseUrl: 'https://leisee1.fly.dev/',
  }),
  endpoints: () => ({}),
});

export default apiSlice;
