import {
    createAsyncThunk,
    createSlice, Draft,
    PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../store';
import {EMedalType, EProtocolType, EResultsType} from "../../enums/medal-type";
import axios from "axios";


type EColumnsType = {
    title: string,
    dataIndex: string,
    key: string
    width?: number
}
type EAthleteType = {
    firstname: string,
    lastname: string
}


type InitialStateType = {
    data: {
        result: EResultsType
        athlete: EAthleteType
        medal: EMedalType
        splits: Array<any>
    }
    columns: EColumnsType[]
    pending: boolean,
    error: string
}

const initialState: InitialStateType = {
    data: {
        result: {} as EResultsType,
        medal: {} as EMedalType,
        splits: [],
        athlete: {} as EAthleteType,
    },
    pending: false,
    error: '',
    columns: [
        {
            title: 'Split',
            dataIndex: 'split',
            key: 'split',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        }
    ]
};
export const getProtocol = createAsyncThunk('protocol', async (id: number) => {
    const response = await axios.get(`https://api.asdev.site/result/${id}`);
    return response.data;
});



export const protocolSlice = createSlice({
    name: 'protocol',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(getProtocol.pending, state => {
            state.pending = true
        })
        builder.addCase(getProtocol.fulfilled, (state, {payload}) => {
            state.data = payload
            state.pending = false
        })
        builder.addCase(getProtocol.rejected, (state, {error}) => {
            state.error = JSON.stringify(error)
        })
    }
});

export const selectProtocol = (state: RootState) => state.protocol;

export default protocolSlice.reducer;
