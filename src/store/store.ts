import {
    Action,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';
import counterReducer from "./slice/counterSlice";
import kanyeReducer from "./slice/kanyeSlice";
import medalReducer from "./slice/medalSlice";
import resultsReducer from "./slice/resultsSlice";
import protocolReducer from "./slice/protocolSlice";
import loginReducer from "./slice/loginSlice";
import cabinetReducer from "./slice/cabinetSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        kanyeQuote: kanyeReducer,
        medal: medalReducer,
        results: resultsReducer,
        protocol: protocolReducer,
        loginModal: loginReducer,
        cabinet: cabinetReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
