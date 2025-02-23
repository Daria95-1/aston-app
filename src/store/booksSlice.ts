import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

interface State {
    bookList: Book[];
    status: null | string;
    error: null | string;
}

export const fetchBooks = createAsyncThunk("books/fetchBooks", async function (_, { rejectWithValue }) {
    try {
        const response = await fetch("https://hopenlibrary.org/search.json?q=the+lord+of+the+rings");

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
    status: null,
    error: null,
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
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.status = "resolved";
            state.bookList = action.payload.docs;
        });
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.status = "rejected";
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },
});

export const { firstLoading } = booksSlice.actions;

export default booksSlice.reducer;
