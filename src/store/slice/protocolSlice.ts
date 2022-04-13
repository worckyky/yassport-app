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
    firstName: string,
    lastName: string
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
    approved: {
        state: string,
        text: string,
        pending: boolean,
    }
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
            dataIndex: 'splitName',
            key: 'splitName',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        }
    ],
    approved: {
        state: '',
        text: '',
        pending: false
    },
};
export const getProtocol = createAsyncThunk('protocol', async (id: number) => {
    const response = await axios.get(`https://api.asdev.site/result/${id}`);
    return response.data;
});


export type EApproveProtocolType = {
    token: string,
    user_id: number,
    result_id: number
}

export const approveProtocol = createAsyncThunk('approveProtocol', async (req: EApproveProtocolType) => {
    const response = await axios.post('https://api.asdev.site/addResult', {
        ...req
    });
    return response.data;
});



export const protocolSlice = createSlice({
    name: 'protocol',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
        .addCase(getProtocol.pending, state => {
            state.pending = true
        }).addCase(getProtocol.fulfilled, (state, {payload}) => {
            state.data = payload
            state.pending = false
        }).addCase(getProtocol.rejected, (state, {error}) => {
            state.pending = false
            state.error = JSON.stringify(error)
        })

        builder
        .addCase(approveProtocol.pending, state => {
            state.approved.pending = true
        })
        .addCase(approveProtocol.fulfilled, (state, {payload}) => {
            state.approved = {
                state: payload.success ? 'success' : 'error',
                text: payload.error || payload.success,
                pending: false
            }
        })
        .addCase(approveProtocol.rejected, (state, {error}) => {
            state.approved.pending = false;
            state.error = JSON.stringify(error)
        })


    }
});

export const selectProtocol = (state: RootState) => state.protocol;

export default protocolSlice.reducer;
