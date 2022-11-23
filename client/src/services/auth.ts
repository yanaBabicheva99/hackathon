import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {DispatchType, InitStateToken, StateType} from '../store/storeTypes';


const initialState: InitStateToken = {
    tokenValue: null
};

interface UserDto {
    email: string;
    id: string;
    isActivated: boolean
}

interface InfoRefresh<T> {
    accessToken: string;
    refreshToken: string;
    user: T
}


const authSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        created(state, action: PayloadAction<InfoRefresh<UserDto>>) {
            if (state) localStorage.setItem('token', action.payload.accessToken);
            state.tokenValue = action.payload.accessToken;
        },
        removed(state) {
            localStorage.removeItem('token');
            state.tokenValue = null;
        }
    }
});

const {actions, reducer: tokenReducer} = authSlice;
const {created, removed} = actions;

export const createToken = (token: InfoRefresh<UserDto>) => (dispatch: DispatchType) => {
    dispatch(created(token));
}
export const removeToken = () => (dispatch: DispatchType) => {
    dispatch(removed());
}

export const getToken = () => (state: StateType) => state.token.tokenValue;
export default tokenReducer;