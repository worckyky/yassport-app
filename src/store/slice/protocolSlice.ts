import {
    createSlice, Draft,
    PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../store';
import {EMedalType, EProtocolType, EResultsType} from "../../enums/medal-type";


type EColumnsType = {
    title: string,
    dataIndex: string,
    key: string
    width?: number
}


type InitialStateType = {
    result: EResultsType
    protocol: EProtocolType[]
    columns: EColumnsType[]
    medal: EMedalType
    id: string
}

const initialState: InitialStateType = {
    id: '',
    result: {
        place: 1,
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        startNumber: '#4324',
        name: 'Anatoliy Mitroshin',
        result: '32 : 15',
        id: 12313
    },
    medal: {
        type: 'Running',
        img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
        id: 314141,
        distance: '42.2 km',
        name: 'RZD Golden Ring Ultra-Trail',
        year: '2022',
        location: 'Russia - Kazan'
    },
    protocol: [
        {
            split: '🥇 1',
            time: '32 : 15',
        },
        {
            split: '🥇 1',
            time: '32 : 15',
        },
        {
            split: '🥇 1',
            time: '32 : 15',
        },
        {
            split: '🥇 1',
            time: '32 : 15',
        },
        {
            split: '🥇 1',
            time: '32 : 15',
        },
        {
            split: '🥇 1',
            time: '32 : 15',
        },
        {
            split: '🥇 1',
            time: '32 : 15',
        },
    ],

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

export const protocolSlice = createSlice({
    name: 'protocol',
    initialState,
    reducers: {
    },
});
// export const {
//
// } = protocolSlice.actions;

export const selectProtocol = (state: RootState) => state;

export default protocolSlice.reducer;
