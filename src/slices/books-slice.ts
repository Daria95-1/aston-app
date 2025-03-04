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

type Data = {
    numFound: number;
    docs: [];
};

export type State = {
    bookList: Book[];
    status?: string;
    error?: string;
    numberOfPages: number;
    currentPage: number;
};

interface MyKnownError {
    errorMessage: string;
}

interface UserAttributes {
    request: string;
    page: number;
}

const STATUS_LOADING: Status = {
    LOADING: "loading",
    RESOLVED: "resolved",
    REJECTED: "rejected",
};

export const fetchBooks = createAsyncThunk<
    Data,
    UserAttributes,
    {
        rejectValue: MyKnownError;
    }
>("@books/fetchBooks", async function (attributes, thunkApi) {
    const response = await fetch(
        `${ROUTES.LIBRARY}/search.json?q=${attributes.request}&page=${attributes.page}&limit=25`
    );

    if (!response.ok) {
        return thunkApi.rejectWithValue((await response.json()) as MyKnownError);
    }

    return (await response.json()) as Data;
});

const initialState: State = {
    bookList: [],
    status: "",
    error: "",
    numberOfPages: 0,
    currentPage: 1,
};

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.currentPage = action.payload;
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
            state.numberOfPages = Math.floor(action.payload.numFound / 25 + 1);
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

export const { changePage } = booksSlice.actions;

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

export const selectNumberOfPages = (state: RootState): number => {
    return (state as { books: State }).books.numberOfPages;
};

export const selectPage = (state: RootState): number => {
    return (state as { books: State }).books.currentPage;
};
