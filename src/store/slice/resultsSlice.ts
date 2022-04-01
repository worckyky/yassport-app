import {
    createSlice, Draft,
    PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../store';
import {EResultsType} from "../../enums/medal-type";


type EColumnsType = {
    title: string,
    dataIndex: string,
    key: string
    width?: number
}


type InitialStateType = {
    results: EResultsType[],
    selectedResult: EResultsType | Draft<any>,
    columns: EColumnsType[]
}

const initialState: InitialStateType = {
    results: [
        {
            place: 1,
            startNumber: '#4324',
            name: 'Anatoliy Mitroshin',
            result: '32 : 15',
            id: 12313
        },
        {
            place: 1,
            startNumber: '#4324',
            name: 'Anatoliy Mitroshin',
            result: '32 : 15',
            id: 12313
        },
        {
            place: 1,
            startNumber: '#4324',
            name: 'Anatoliy Mitroshin',
            result: '32 : 15',
            id: 12313
        },
        {
            place: 1,
            startNumber: '#4324',
            name: 'Anatoliy Mitroshin',
            result: '32 : 15',
            id: 12313
        },
        {
            place: 1,
            startNumber: '#4324',
            name: 'Anatoliy Mitroshin',
            result: '32 : 15',
            id: 12313
        },
        {
            place: 1,
            startNumber: '#4324',
            name: 'Anatoliy Mitroshin',
            result: '32 : 15',
            id: 12313
        }
    ],
    selectedResult: {} as EResultsType,
    columns: [
        {
            title: '🎖 Place',
            dataIndex: 'place',
            key: 'place',
            width: 100
        },
        {
            title: '⏱ Start number',
            dataIndex: 'startNumber',
            key: 'startNumber',
            width: 150
        },
        {
            title: '👦 Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '🏆 Result',
            dataIndex: 'result',
            key: 'result',
            width: 150
        }
    ]
};

export const counterSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        takeResults: (state,action:PayloadAction<string>) => {
            state.selectedResult = state.results.find(elem => elem.id == +action.payload);
        },
        takeResultByName: (state, action: PayloadAction<string>) => {
            state.results = state.results.filter(results => results.name !== action.payload)
        }
    },
});
export const {
    takeResults,
} = counterSlice.actions;

export const selectResults = (state: RootState) => state.results.results;
export const selectColumns = (state: RootState) => state.results.columns;
export const selectResultsId = (state: RootState) => state.results.selectedResult;

export default counterSlice.reducer;
