import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";

export default store = configureStore({
    reducer: {
        books: booksReducer,
    },
});
