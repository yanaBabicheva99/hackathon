import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {userAPI} from "../services/userService";
import {authAPI} from "../services/authService";
import tokenReducer from "../services/auth";


const rootReducer = combineReducers({
    [userAPI.reducerPath]: userAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    token: tokenReducer
});

export const createStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat([userAPI.middleware, authAPI.middleware])
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore['dispatch']
