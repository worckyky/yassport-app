import {
    combineReducers,
    createAsyncThunk,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import type {RootState} from '../store';
import axios from "axios";
import {IFormLoginType} from "../../components/sections/registration/login-form/login-form";
import {useAppDispatch} from "../hooks";

// declaring the types for our state


type InitialStateType = {
    email: string,
    firstName: string,
    lastName: string,
    expired: string,
    token: string,
    pending: boolean,
    isAuthed: boolean,
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
    isAuthed: false,
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

// User registration
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
    reducers: {
        removeError: (state) => {
            state.onRegister.error = ''
        }
    },
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
                state.isAuthed = true;
                localStorage.setItem('authToken', payload.token)
            })
            .addCase(authUser.rejected, (state, {error}) => {
                state.pending = false;
                state.isAuthed = false;
                state.onRegister.error = JSON.stringify(error)
            });
    },
});

export const {
    removeError,
} = authSlice.actions;


export const checkUser = createAsyncThunk('checkUser',async (token: string) => {
    const response = await axios.post('https://api.asdev.site/checkToken', {token})
    return response.data;
})

// User check
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
            localStorage.removeItem('authToken')
        },
    },
    extraReducers: builder => {
        builder
            .addCase(checkUser.pending, state => {
                state.pending = true;
            })
            .addCase(checkUser.fulfilled, (state,{payload})=> {
                if (payload.error) {
                    state.token = ''
                    state.expired = ''
                    state.email = ''
                    state.lastName = ''
                    state.firstName = ''
                    localStorage.removeItem('authToken')
                    return
                }
                state.pending = false;
                state.token = payload.token
                state.expired = payload.expired
                state.firstName = payload.firstName
                state.lastName = payload.lastName
                state.email = payload.email;
                state.isAuthed = true;
            })
            .addCase(checkUser.rejected,(state, {error})=> {
                state.isAuthed = false;
                state.pending = false;
                state.onRegister.error = JSON.stringify(error)
            })
    }
})

export const {
    resetUser,
} = checkUserSLice.actions;


// User login
export const loginUser = createAsyncThunk('loginUser',async (fields: IFormLoginType) => {
    const response = await axios.post('https://api.asdev.site/auth',
        {...fields},
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    return response.data;
})


export const loginUserSLice = createSlice({
    name:'loginUser',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loginUser.pending, state => {
                state.pending = true;
            })
            .addCase(loginUser.fulfilled, (state,{payload})=> {
                state.pending = false;
                state.token = payload.token
                state.expired = payload.expired
                state.firstName = payload.firstName
                state.lastName = payload.lastName
                state.email = payload.email
                state.isAuthed = true;
                localStorage.setItem('authToken', payload.token)
            })
            .addCase(loginUser.rejected,(state, {error})=> {
                state.pending = false;
                state.isAuthed = false;
                state.onRegister.error = JSON.stringify(error)
            })
    }
})





export const selectCheckUser = (state: RootState) => state.checkUser;
export const selectLoginUser = (state: RootState) => state.login;
export const selectRegisterUser = (state: RootState) => state.auth;
export const isAuthUser = (state: RootState) => state.checkUser.isAuthed;
export const selectRegistrationError = (state: RootState) => state.auth.onRegister.error

export const authSliceReducer = authSlice.reducer
export const checkUserSliceReducer = checkUserSLice.reducer
export const loginUserSliceReducer = loginUserSLice.reducer


