import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'

// Configure the store with a proper reducer object so state.auth is available
const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;