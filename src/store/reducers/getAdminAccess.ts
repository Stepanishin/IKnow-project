import { createSlice } from "@reduxjs/toolkit";

type DefaultCheckedStateType = {
    isAdmin: boolean
}

const initialState :DefaultCheckedStateType = {
    isAdmin: false,
}

export const adminAccessSlice = createSlice({
    name: "adminAccess",
    initialState,
    reducers: {
            adminAccess(state) {
                state.isAdmin = true
            },
        },
})

export default adminAccessSlice.reducer