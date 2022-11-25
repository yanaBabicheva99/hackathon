import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (content) => ({
        url: "registration",
        method: "POST",
        body: content,
        credentials: "include",
      }),
    }),
    signIn: build.mutation({
      query: (content) => ({
        url: "login",
        method: "POST",
        body: content,
        credentials: "include",
      }),
    }),
    logout: build.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useLogoutMutation } =
  authAPI;
