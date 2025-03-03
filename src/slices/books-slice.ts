import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ROUTES } from "@constants";

type Status = {
    LOADING: "loading";
    RESOLVED: "resolved";
    REJECTED: "rejected";
};

type Book = {
    author_name: string[];
    cover_edition_key: string;
    key: string;
    title: string;
};

export type State = {
    bookList: Book[];
    status?: string;
    error?: string;
};

const STATUS_LOADING: Status = {
    LOADING: "loading",
    RESOLVED: "resolved",
    REJECTED: "rejected",
};

export const fetchBooks = createAsyncThunk("@books/fetchBooks", async function (_, { rejectWithValue }) {
    try {
        const response = await fetch(`${ROUTES.LIBRARY}/search.json?q=the+lord+of+the+rings`); //поправлю на строку из поиска когда он уже у нас появится

        if (!response.ok) {
            throw new Error("Error!");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        }
    }
});

const initialState: State = {
    bookList: [],
    status: "",
    error: "",
};

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.status = STATUS_LOADING.LOADING;
            state.error = "";
        });
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.status = STATUS_LOADING.RESOLVED;
            state.bookList = action.payload.docs;
            console.log(state.bookList);
        });
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.status = STATUS_LOADING.REJECTED;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },
});

export const booksReducer = booksSlice.reducer;

export const selectAllBooks = (state: RootState): Book[] => {
    return (state as { books: State }).books.bookList;
};

export const selectStatus = (state: RootState): string | undefined => {
    return (state as { books: State }).books.status;
};

export const selectError = (state: RootState): string | undefined => {
    return (state as { books: State }).books.error;
};

export const isBooksLoadingSelector = (state: RootState): boolean => {
    return (state as { books: State }).books.status === STATUS_LOADING.LOADING;
};
