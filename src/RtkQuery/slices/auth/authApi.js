import { apiSlice } from '../apiSlice';
// import { logOut } from './authSlice';

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
    // sendLogout: builder.mutation({
    //   query: () => ({
    //     url: '/logout',
    //     method: 'DELETE',
    //     // headers: state.accessToken,
    //   }),
    //   async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {
    //     try {
    //       const { data } = await queryFulfilled;
    //       const state = await getState();
    //       console.log(data);
    //       console.log(state);
    //       dispatch(logOut());
    //       // setTimeout(() => {
    //       //   dispatch(apiSlice.util.resetApiState());
    //       // }, 1000);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   },
    // }),
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

export const {
  useLoginUserMutation,
  useSendLogoutMutation,
  useRegisterUserMutation,
} = authApi;

export const reducerPath = 'authApi';
