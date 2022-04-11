import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../store';
import {EMedalType} from "../../enums/medal-type";
import axios from "axios";

// declaring the types for our state

type InitialStateType = {
    medals: EMedalType[],
    pending: boolean
    error: boolean
    total: number
}


const initialState: InitialStateType = {
    total: 0,
    medals: [] as EMedalType[],
    pending: false,
    error: false
};



export const getMedals = createAsyncThunk('medals', async (page:number = 0) => {
    const response = await axios.get(`https://api.asdev.site/medals/${page}`);
    return response.data;
});


export const medalsSlice = createSlice({
    name: 'medals',
    initialState,
    reducers: {
        resetMedals: (state) => {
            state.medals = []
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getMedals.pending, state => {
                state.pending = true;
            })
            .addCase(getMedals.fulfilled, (state, { payload }) => {
                const {medals, total} = payload
                state.pending = false;
                state.total = total
                state.medals = [...state.medals, ...medals]
            })
            .addCase(getMedals.rejected, state => {
                state.pending = false;
                state.error = true;
            });
    },
});

export const {
    resetMedals
} = medalsSlice.actions;

export const selectMedals = (state: RootState) => state.medals;

export default medalsSlice.reducer;
