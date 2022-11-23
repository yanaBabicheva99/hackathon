import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import {RootState} from "../store/store";

import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import {createToken, removeToken} from "../services/auth";


const baseUrl = `${process.env.API_URL}/api/`;

 const baseQuery = fetchBaseQuery(
    {
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).token.tokenValue;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
                headers.set('content-type', 'text/plain');
            }
            return headers;
        },

    }
);

const customFetchBase: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
    > = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
        const refreshResult = await baseQuery({
            credentials: 'include',
            url: 'refresh'
        }, api, extraOptions);

        if (refreshResult.data) {
            api.dispatch(createToken(refreshResult.data as any));
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(removeToken())
        }
    }
    return result
}

export default customFetchBase;