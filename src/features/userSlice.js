import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = Cookies.get("user")?JSON.parse(Cookies.get("user")):null

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            
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