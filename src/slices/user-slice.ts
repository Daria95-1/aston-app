import { RootState } from '../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ROLE } from '@constants'

type FavoriteItem = {
    key: string
    title: string
    author_name: string[]
    cover_edition_key: string
}

type HistoryItem = {
    key: string
    title: string
    author_name: string[]
    cover_edition_key: string

}

// Определяем тип состояния для пользователя
export type User = {
    id: number | null
    login: string | null
    roleId: string
    session: string | null
    favorites: FavoriteItem[]
    history: HistoryItem[]
}

export type Session = {
    id: number
    hash: string
    user: User
}

// Начальное состояние
const initialState: User = {
    id: null,
    login: null,
    roleId: ROLE.GUEST,
    session: null,
    favorites: [],
    history: []
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
            state.id = null
            state.login = null
            state.roleId = ROLE.GUEST
            state.session = null
        },
        addToFavorites: (state, action: PayloadAction<FavoriteItem>) => {
            state.favorites.push(action.payload)
        },
        deleteFromFavorites: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter(
                (book) => book.key !== action.payload
            )
        },
        
        addToHistory: (state, action: PayloadAction<HistoryItem>) => {
            const existingIndex = state.history.findIndex((item) => item.key === action.payload.key);
            if (existingIndex === -1) {
              state.history.unshift(action.payload);
            }
          },
    },
})

export const { setUser, logoutUser, addToFavorites, deleteFromFavorites, addToHistory } =
    userSlice.actions

export const userReducer = userSlice.reducer

export const selectUserLogin = (state: RootState): string | null => {
    return (state as { user: User }).user.login
}
export const selectUserRole = (state: RootState): string => {
    return (state as { user: User }).user.roleId
}
export const selectUserSession = (state: RootState): string | null => {
    return (state as { user: User }).user.session
}

export const selectUserFavorites = (state: RootState): FavoriteItem[] => {
    return (state as { user: User }).user.favorites
}

export const selectUserHistory = (state: RootState): HistoryItem[] => {
    return (state as { user: User }).user.history
}

export const isBookFavorite = (state: RootState, bookKey: string): boolean => {
    return (state as { user: User }).user.favorites.some((fav) => fav.key === bookKey);
};