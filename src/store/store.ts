import {combineReducers, configureStore} from "@reduxjs/toolkit";
import termsAndConditionsSlice from './reducers/getTermsAndConditionsReducer'
import timerAndDisableBtnSlice from './reducers/getTimerAndDisablebtnReducer'



const rootReducer = combineReducers({
    termsAndConditionsSlice,
    timerAndDisableBtnSlice
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
