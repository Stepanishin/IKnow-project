import { createSlice } from "@reduxjs/toolkit";

type DefaultCheckedStateType = {
    isChecked: boolean,
    isDisabled: boolean
}

const initialState :DefaultCheckedStateType = {
    isChecked: false,
    isDisabled: true,
}

export const termsAndConditionsSlice = createSlice({
    name: "termsAndConditionsInput",
    initialState,
    reducers: {
            termsAndConditions(state) {
                state.isChecked = !state.isChecked
                state.isDisabled = !state.isDisabled
            },
        },
})

export default termsAndConditionsSlice.reducer
