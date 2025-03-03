import { configureStore } from "@reduxjs/toolkit";
import { booksReducer, userReducer, oneBookReducer } from "@slices";

export const store = configureStore({
    reducer: {
        books: booksReducer,
        book: oneBookReducer,
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
