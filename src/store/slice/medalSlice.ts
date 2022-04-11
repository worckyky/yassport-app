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


type EColumnsType = {
    title: string,
    dataIndex: string,
    key: string
    width?: number
}


type InitialStateType = {
    medal: EMedalType,
    results: {
        total: number
        list: EProtocolType[]
        pending: boolean
        error: string
    },
    pending: boolean
    error: boolean,
    columns: EColumnsType[]
}


const initialState: InitialStateType = {
    medal: {} as EMedalType,
    results: {
        total: 0,
        list: [],
        pending: false,
        error: ''
    },
    pending: false,
    error: false,
    columns: [
        {
            title: '🎖 Place',
            dataIndex: 'place',
            key: 'place',
            width: 100
        },
        {
            title: '⏱ Start number',
            dataIndex: 'bib',
            key: 'bib',
            width: 150
        },
        {
            title: '👦 Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '🏆 Result',
            dataIndex: 'overalltime',
            key: 'overalltime',
            width: 150
        }
    ]
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
                state.medal = payload.medal;
            })
            .addCase(getMedal.rejected, state => {
                state.pending = false;
                state.error = true;
            });
    },
});

type EGetResultParams = {
    medal_id: number,
    page: number,
    max: number
}

export const getResult = createAsyncThunk('result', async (data: EGetResultParams) => {
    const response = await axios.post(`https://api.asdev.site/results`, {
        ...data
    });
    return response.data;
});

export const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        resetList: (state) => {
            state.results.list = []
        }
    },
    extraReducers: builder => {
        builder
        .addCase(getResult.pending, state => {
            state.results.pending = true
        })
        .addCase(getResult.fulfilled, (state, {payload} ) => {
            state.results.pending = false
            state.results.total = payload.total
            state.results.list = [...state.results.list, ...payload.results]
        })
        .addCase(getResult.rejected, (state) => {
            state.results.pending = false
            state.results.error = 'Some problem'
        })
    }
})

export const { resetList } = resultSlice.actions


export const selectMedal = (state: RootState) => state.medal;
export const selectResults = (state: RootState) => state.results.results;
export const selectColumns = (state: RootState) => state.results.columns;

export const medalsSliceReducer = medalsSlice.reducer
export const resultsSliceReducer = resultSlice.reducer

