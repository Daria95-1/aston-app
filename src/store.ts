import { configureStore } from "@reduxjs/toolkit";
import { booksReducer, appReducer, userReducer, usersReducer } from '@slices'

export const store = configureStore({
    reducer: {
        app: appReducer,
        books: booksReducer,
        user: userReducer,
        users: usersReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;