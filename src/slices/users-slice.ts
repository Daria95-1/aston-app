import { createSlice } from '@reduxjs/toolkit'

const initialUsersState = {}

const usersSlice = createSlice({
    name: 'users',
    initialState: initialUsersState,
    reducers: {},
})

export const usersReducer = usersSlice.reducer
