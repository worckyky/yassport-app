import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../store';
import {EMedalType, EResultsType} from "../../enums/medal-type";
import {EPersonalInfoType} from "../../enums/personal-info-type";
import axios from "axios";



export type cabinetState = {
    results: {
        data: Array<{
            medal: EMedalType,
            result: EResultsType
        }>
        pending: boolean
    }
    account: EPersonalInfoType
};

const initialState: cabinetState = {
    results: {
        data: [],
        pending: false
    },
    account: {
        firstName: '',
        lastName: '',
        birth: '',
        gender: '',
        email: '',
        pending: false
    } as EPersonalInfoType
};

type ETypeFetch = {
    token: string,
    user_id: number,
}


export const fetchUser = createAsyncThunk('fetchUser', async (req: ETypeFetch) => {
    const response = await axios.post('https://api.asdev.site/profile', {
        ...req
    });
    return response.data;
});

export const fetchResults = createAsyncThunk('fetchResults', async (req: ETypeFetch) => {
    const response = await axios.post('https://api.asdev.site/profileResults', {
        ...req
    });
    return response.data;
});


export const cabinetSlice = createSlice({
    name: 'cabinet',
    initialState,
    reducers: {
        resetCabinet: state => {
            state.account = {} as EPersonalInfoType
            state.results.data = []
        }
    },
    extraReducers: builder => {
        builder
        .addCase(fetchUser.pending, state => {
            state.account.pending = true
        })
        .addCase(fetchUser.fulfilled, (state, {payload}) => {
            state.account.pending = true
            state.account.birth = payload.birth
            state.account.email = payload.email
            state.account.gender = payload.gender
            state.account.firstName = payload.firstName
            state.account.lastName = payload.lastName
        })
        .addCase(fetchUser.rejected, state => {
            state.account.pending = true
        })

        builder
        .addCase(fetchResults.pending, state => {
            state.results.pending = true
        })
        .addCase(fetchResults.fulfilled, (state, {payload}) => {
            state.results.pending = false
            state.results.data = [...payload]
        })
        .addCase(fetchResults.rejected, (state => {
            state.results.pending = false
        }))

    }
});

export const {
    resetCabinet
} = cabinetSlice.actions

export const selectCabinetResults = (state: RootState) => state.cabinet.results;
export const selectCabinetAccount = (state: RootState) => state.cabinet.account;

export default cabinetSlice.reducer;
