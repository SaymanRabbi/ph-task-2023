import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../features/userReducer"

const store = configureStore({
    reducer: {
       user:userSlice
    }
})

export default store