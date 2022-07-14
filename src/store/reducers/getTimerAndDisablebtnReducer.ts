import { createSlice } from "@reduxjs/toolkit";

type DefaultCheckedStateType = {
    isTimeToDisable: boolean
}

const initialState :DefaultCheckedStateType = {
    isTimeToDisable: false,
}

export const timerAndDisableBtnSlice = createSlice({
    name: "termsAndConditionsInput",
    initialState,
    reducers: {
            timerAndDisableBtn(state) {
                state.isTimeToDisable = !state.isTimeToDisable
            },
        },
})

export default timerAndDisableBtnSlice.reducer