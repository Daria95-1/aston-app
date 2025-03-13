import { configureStore } from "@reduxjs/toolkit";
import { booksReducer, userReducer, oneBookReducer } from "@slices";
// import { favoritesMiddleware } from '@middlewares'

export const store = configureStore({
    reducer: {
        books: booksReducer,
        book: oneBookReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(favoritesMiddleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
