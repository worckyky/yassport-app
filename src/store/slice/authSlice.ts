import {
    combineReducers,
    createAsyncThunk,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import type {RootState} from '../store';
import axios from "axios";
import {json} from "stream/consumers";
import {resultsSlice} from "./resultsSlice";

// declaring the types for our state

type InitialStateType = {
    email: string,
    firstName: string,
    lastName: string,
    expired: string,
    token: string,
    pending: boolean,
    onRegister: {
        error: string,
    }
}

const initialState: InitialStateType = {
    firstName: '',
    lastName: '',
    email: '',
    expired: '',
    token: '',
    pending: false,
    onRegister: {
        error: ''
    }
};

export type IFormValuesType = {
    firstName: string,
    lastName: string,
    birth: string,
    gender: string,
    email: string,
    password: string,
    checkPassword?: string,
}


export const authUser = createAsyncThunk('auth', async (field: IFormValuesType) => {
    const response = await axios.post('https://api.asdev.site/signup', {
        ...field
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.data;
});
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(authUser.pending, state => {
                state.pending = true;
            })
            .addCase(authUser.fulfilled, (state, {payload}) => {
                if (payload.error) {
                    state.onRegister.error = payload.error.email[0]
                    return;
                }
                state.pending = false;
                state.token = payload.token
                state.expired = payload.expired
                state.firstName = payload.firstName
                state.lastName = payload.lastName
                state.email = payload.email
                localStorage.setItem('authToken', payload.token)
            })
            .addCase(authUser.rejected, (state, {error}) => {
                state.pending = false;
                state.onRegister.error = JSON.stringify(error)
            });
    },
});

export const checkUser = createAsyncThunk('checkUser',async (token: string) => {
    const response = await axios.post('https://api.asdev.site/checkToken', token)
    return response.data;
})


export const checkUserSLice = createSlice({
    name:'checkUser',
    initialState,
    reducers: {
        resetUser: (state) => {
            state.token = ''
            state.expired = ''
            state.email = ''
            state.lastName = ''
            state.firstName = ''
        },
    },
    extraReducers: builder => {
        builder
            .addCase(checkUser.pending, state => {
                state.pending = true;
            })
            .addCase(checkUser.fulfilled, (state,{payload})=> {
                state.pending = false;
                state.token = payload.token
                state.expired = payload.expired
                state.firstName = payload.firstName
                state.lastName = payload.lastName
                state.email = payload.email
            })
            .addCase(checkUser.rejected,(state, {error})=> {
                state.pending = false;
                state.onRegister.error = JSON.stringify(error)
            })
    }
})

export const {
    resetUser,
} = checkUserSLice.actions;


export const selectRegistered = (state: RootState) => state.auth;
export const selectRegistrationError = (state: RootState) => state.auth.onRegister.error

export const authSliceReducer = authSlice.reducer
export const checkUserSliceReducer = checkUserSLice.reducer


