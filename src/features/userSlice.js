import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: null,
    name: null,
    token: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(action)
            state.email = action.payload.email
            state.name = action.payload.name
            state.token = action.payload.token
        },
        logout: (state) => {
            state.email = null
            state.name = null
            state.token = null
        },
        register: (state, action) => {
            state.email = action.payload.email
            state.name = action.payload.name
            state.token = action.payload.token
        }
    }
})

export const { login, logout, register } = userSlice.actions
export default userSlice.reducer