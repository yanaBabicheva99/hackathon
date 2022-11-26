import { createApi } from "@reduxjs/toolkit/dist/query/react";
import customFetchBase from "../middleware/interceptor";
import { Test } from "../types";

export const testAPI = createApi({
<<<<<<< HEAD
    reducerPath: "testAPI",
    baseQuery: customFetchBase,
    tagTypes: ['Test'],
    endpoints: (build) => ({
        getTests: build.query<Test[], void>({
            query: () => ({
                url: 'tests',
            }),
            transformResponse: (response: any) => response.result,
            providesTags: (result) => ['Test'],
        }),
        getTest: build.query<Test, string>({
            query: (id: string) => ({
                url: `tests/${id}`,
            }),
            transformResponse: (response: any) => response.result,
            providesTags: (result) => ['Test'],
        }),
        createTest: build.mutation<Test, Test>({
            query: (content) => ({
                url: "tests",
                method: "POST",
                body: content,
            }),
            invalidatesTags: ['Test']
        }),
        changeTest: build.mutation<Test, object>({
            query: (content: {id: string, data: Test}) => ({
                url: `tests/${content.id}`,
                method: "PUT",
                body: content.data,
            }),
            invalidatesTags: ['Test']
        }),
        deleteTest: build.mutation<Test, string>({
            query: (id: string) => ({
                url: `tests/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Test']
        }),
=======
  reducerPath: "testAPI",
  baseQuery: customFetchBase,
  tagTypes: ["Test"],
  endpoints: (build) => ({
    getTests: build.query<Test[], void>({
      query: () => ({
        url: "tests",
      }),
      transformResponse: (response: any) => response.result,
      providesTags: (result) => ["Test"],
    }),
    getTest: build.query<Test, string>({
      query: (id: string) => ({
        url: `tests?id=${id}`,
      }),
      transformResponse: (response: any) => response.result,
      providesTags: (result) => ["Test"],
    }),
    createTest: build.mutation<Test, Test>({
      query: (content) => ({
        url: "tests",
        method: "POST",
        body: content,
      }),
      invalidatesTags: ["Test"],
>>>>>>> 15d0f2f59eced1241fed604ec56398b6c2fd36f2
    }),
    changeTest: build.mutation<Test, object>({
      query: (content: { id: string; data: Test }) => ({
        url: `tests/${content.id}`,
        method: "POST",
        body: content.data,
      }),
      invalidatesTags: ["Test"],
    }),
    deleteTest: build.mutation<Test, string>({
      query: (id: string) => ({
        url: `tests/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Test"],
    }),
  }),
});

export const {
  useChangeTestMutation,
  useCreateTestMutation,
  useDeleteTestMutation,
  useGetTestQuery,
  useGetTestsQuery,
} = testAPI;
