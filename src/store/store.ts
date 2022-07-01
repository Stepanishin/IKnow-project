import {combineReducers, configureStore} from "@reduxjs/toolkit";
import termsAndConditionsSlice from './reducers/getTermsAndConditionsReducer'



const rootReducer = combineReducers({
    termsAndConditionsSlice
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

// export const store = configureStore(rootReducer)