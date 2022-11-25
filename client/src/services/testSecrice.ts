import { createApi } from "@reduxjs/toolkit/dist/query/react";
import customFetchBase from "../middleware/interceptor";
import {Test} from "../types";


export const testAPI = createApi({
    reducerPath: "testAPI",
    baseQuery: customFetchBase,
    tagTypes: ['Test'],
    endpoints: (build) => ({
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
                method: "POST",
                body: content.data,
            }),
            invalidatesTags: ['Test']
        }),
    }),
});
