import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
import { appReducer, userReducer, usersReducer} from '@reducers'


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