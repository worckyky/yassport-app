import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../store';
import {EMedalType, EResultsType} from "../../enums/medal-type";
import axios from "axios";
import {EProtocolType} from "../../enums/protocol-type";

// declaring the types for our state

type InitialStateType = {
    content: {
        medal: EMedalType,
        results: EProtocolType[]
    },
    pending: boolean
    error: boolean
}


const initialState: InitialStateType = {
    content: {
        medal: {} as EMedalType,
        results: [] as EProtocolType[]
    },
    pending: false,
    error: false
};



export const getMedal = createAsyncThunk('medal', async (id:string) => {
    const response = await axios.get(`https://api.asdev.site/medal/${id}`);
    return response.data;
});


export const medalsSlice = createSlice({
    name: 'medal',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getMedal.pending, state => {
                state.pending = true;
            })
            .addCase(getMedal.fulfilled, (state, { payload }) => {
                state.pending = false;
                state.content = payload;
            })
            .addCase(getMedal.rejected, state => {
                state.pending = false;
                state.error = true;
            });
    },
});

export const selectMedal = (state: RootState) => state.medal;

export default medalsSlice.reducer;
