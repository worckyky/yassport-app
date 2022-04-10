import {
    createSlice, Draft,
    PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../store';



type InitialStateType = {
    onOpen: boolean
}

const initialState: InitialStateType = {
    onOpen: false
};

export const loginSlice = createSlice({
    name: 'loginModal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.onOpen = true;
        },
        closeModal: (state) => {
            state.onOpen = false;
        },
    },
});
export const {
    openModal,
    closeModal,
} = loginSlice.actions;

export const selectOnOpen = (state: RootState) => state.loginModal.onOpen;

export default loginSlice.reducer;
