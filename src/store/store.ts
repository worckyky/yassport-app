import {
    Action,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';
import medalsReducer from "./slice/medalsSlice";
import {medalsSliceReducer ,resultsSliceReducer} from "./slice/medalSlice";
import protocolReducer from "./slice/protocolSlice";
import loginReducer from "./slice/loginSlice";
import cabinetReducer from "./slice/cabinetSlice";
import {authSliceReducer, checkUserSliceReducer, loginUserSliceReducer} from "./slice/authSlice";


export const store = configureStore({
    reducer: {
        medals: medalsReducer,
        medal: medalsSliceReducer,
        results: resultsSliceReducer,
        protocol: protocolReducer,
        loginModal: loginReducer,
        cabinet: cabinetReducer,
        auth: authSliceReducer,
        checkUser: checkUserSliceReducer,
        login: loginUserSliceReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
