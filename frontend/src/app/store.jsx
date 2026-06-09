import {configureStore} from '@reduxjs/toolkit';
import authReducer from "../features/auth/state/auth/authSlice"

const store = configureStore({
    reducer :{
        "auth" : authReducer
    }
})

export {store};