import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../store';
import {EMedalType, EResultsType} from "../../enums/medal-type";
import {EPersonalInfoType} from "../../enums/personal-info-type";

// declaring the types for our state
export type cabinetState = {
    activity: Array<{
        medal: EMedalType,
        result: EResultsType
    }>
    account: EPersonalInfoType
};

const initialState: cabinetState = {
    activity: [
        {
            medal:{
                type: 'Running',
                img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
                id: 314141,
                distance: '42.2 km',
                name: 'RZD Golden Ring Ultra-Trail RZD Golden Ring Ultra-Trail RZD Golden Ring Ultra-Trail',
                year: '2022',
                location: 'Russia - Kazan'
            },
            result: {
                place: 1,
                avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
                startNumber: '#4324',
                name: 'Anatoliy Mitroshin',
                result: '32 : 15',
                id: 12313
            },
        },
        {
            medal:{
                type: 'Running',
                img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
                id: 314141,
                distance: '42.2 km',
                name: 'RZD Golden Ring Ultra-Trail',
                year: '2022',
                location: 'Russia - Kazan'
            },
            result: {
                place: 1,
                avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
                startNumber: '#4324',
                name: 'Anatoliy Mitroshin',
                result: '32 : 15',
                id: 12313
            },
        },
    ],
    account: {
        name: 'Anatoliy',
        lastName: 'Mitroshin',
        birth: '09.07.1994',
        gender: 'Male',
        email: 'mymailtolaaa@gmail.com'
    } as EPersonalInfoType
};

export const cabinetSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    },
});
// export const {
//
// } = counterSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectCabinetActivities = (state: RootState) => state.cabinet.activity;
export const selectCabinetAccount = (state: RootState) => state.cabinet.account;

// exporting the reducer here, as we need to add this to the store
export default cabinetSlice.reducer;
