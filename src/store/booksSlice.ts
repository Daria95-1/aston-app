import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const URL_BASE = "https://openlibrary.org/search.json?q=";

interface Status {
    LOADING: "loading";
    RESOLVED: "resolved";
    REJECTED: "rejected";
}

interface Book {
    author_key: string[];
    author_name: string[];
    cover_edition_key: string;
    cover_i: number;
    edition_count: number;
    first_publish_year: number;
    key: string;
    title: string;
}

export interface State {
    bookList: Book[];
    status?: string;
    error?: string;
}

const STATUS_LOADING: Status = {
    LOADING: "loading",
    RESOLVED: "resolved",
    REJECTED: "rejected",
};

export const fetchBooks = createAsyncThunk("@books/fetchBooks", async function (_, { rejectWithValue }) {
    try {
        const response = await fetch(`${URL_BASE}the+lord+of+the+rings`); //поправлю на строку из поиска когда он уже он у нас появится

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
    reducers: {
        firstLoading: (state) => {
            console.log(state);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.status = STATUS_LOADING.LOADING;
            state.error = "";
        });
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.status = STATUS_LOADING.RESOLVED;
            state.bookList = action.payload.docs;
        });
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.status = STATUS_LOADING.REJECTED;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },
});

export const { firstLoading } = booksSlice.actions;

export default booksSlice.reducer;

export const selectAllBooks = (state: RootState) => state.books.bookList;
export const selectStatus = (state: RootState) => state.books.status;
export const selectError = (state: RootState) => state.books.error;
export const isBooksLoadingSelector = (state: RootState) => state.books.status === STATUS_LOADING.LOADING;
