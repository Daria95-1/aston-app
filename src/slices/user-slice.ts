import { RootState } from '../store'
import { createSlice } from '@reduxjs/toolkit'
import { ROLE } from '@constants'

// Определяем тип состояния для пользователя
type UserState = {
    id: number | null
    login: string | null
    roleId: string
    session: string | null
}

// Начальное состояние
const initialState: UserState = {
    id: null,
    login: null,
    roleId: ROLE.GUEST,
    session: null,
}

// Создание слайса
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id
            state.login = action.payload.login
            state.roleId = action.payload.roleId
            state.session = action.payload.session
        },
        logoutUser: (state) => {
            console.log('Logging out, resetting user state')
            state.id = null
            state.login = null
            state.roleId = ROLE.GUEST
            state.session = null
        },
    },
})

export const { setUser, logoutUser } = userSlice.actions

export const userReducer = userSlice.reducer

export const selectUserLogin = (state: RootState): string | null => {
    return (state as { user: UserState }).user.login
}
export const selectUserRole = (state: RootState): string => {
    return (state as { user: UserState }).user.roleId
}
export const selectUserSession = (state: RootState): string | null => {
    return (state as { user: UserState }).user.session
}
