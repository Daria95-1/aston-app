import { createSlice } from '@reduxjs/toolkit'
import { type RootState } from '../store'

interface AppState {
    wasLogout: boolean
}

const initialState: AppState = {
    wasLogout: false,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        logout: (state) => {
            state.wasLogout = !state.wasLogout
        },
    },
})

export const { logout } = appSlice.actions

export const selectWasLogout = (state: RootState): boolean => {
    return (state as { app: AppState }).app.wasLogout
}
export const appReducer = appSlice.reducer
