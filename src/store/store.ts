import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { firebaseApi } from "./reducers/firebase.api";
import termsAndConditionsSlice from './reducers/getTermsAndConditionsReducer'
import timerAndDisableBtnSlice from './reducers/getTimerAndDisablebtnReducer'
import adminAccessSlice from './reducers/getAdminAccess'



const rootReducer = combineReducers({
    termsAndConditionsSlice,
    timerAndDisableBtnSlice,
    adminAccessSlice,
    [firebaseApi.reducerPath]: firebaseApi.reducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(firebaseApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
