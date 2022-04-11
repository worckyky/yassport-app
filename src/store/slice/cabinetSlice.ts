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
    activity: [],
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
