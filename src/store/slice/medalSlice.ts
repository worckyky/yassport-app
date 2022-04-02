import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../store';
import {EMedalType} from "../../enums/medal-type";

// declaring the types for our state

type InitialStateType = {
    medals: EMedalType[],
    selectedMedal?: EMedalType
}


const initialState: InitialStateType = {
    medals: [
        {
            type: 'Running',
            img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
            id: 314141,
            distance: '42.2 km',
            name: 'RZD Golden Ring Ultra-Trail',
            year: '2022',
            location: 'Russia - Kazan'
        },
        {
            type: 'Running',
            img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
            id: 314141,
            distance: '42.2 km',
            name: 'RZD Golden Ring Ultra-Trail',
            year: '2022',
            location: 'Russia - Kazan'
        },
        {
            type: 'Running',
            img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
            id: 314141,
            distance: '42.2 km',
            name: 'RZD Golden Ring Ultra-Trail',
            year: '2022',
            location: 'Russia - Kazan'
        },
        {
            type: 'Running',
            img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
            id: 314141,
            distance: '42.2 km',
            name: 'RZD Golden Ring Ultra-Trail',
            year: '2022',
            location: 'Russia - Kazan'
        },
        {
            type: 'Running',
            img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
            id: 314141,
            distance: '42.2 km',
            name: 'RZD Golden Ring Ultra-Trail',
            year: '2022',
            location: 'Russia - Kazan'
        },
        {
            type: 'Running',
            img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
            id: 314141,
            distance: '42.2 km',
            name: 'RZD Golden Ring Ultra-Trail',
            year: '2022',
            location: 'Russia - Kazan'
        },
        {
            type: 'Running',
            img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
            id: 314141,
            distance: '42.2 km',
            name: 'RZD Golden Ring Ultra-Trail',
            year: '2022',
            location: 'Russia - Kazan'
        },
        {
            type: 'Running',
            img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
            id: 314141,
            distance: '42.2 km',
            name: 'RZD Golden Ring Ultra-Trail',
            year: '2022',
            location: 'Russia - Kazan'
        }
    ],
    selectedMedal: {} as EMedalType

};

export const medalSlice = createSlice({
    name: 'medal',
    initialState,
    reducers: {
        takeMedal: (state,action:PayloadAction<string>) => {
            state.selectedMedal = state.medals.find(elem => elem.id == +action.payload);
        },
    },
});
export const {
    takeMedal,
} = medalSlice.actions;

export const selectMedals = (state: RootState) => state.medal.medals;
export const selectMedalById = (state: RootState) => state.medal.selectedMedal;

export default medalSlice.reducer;
