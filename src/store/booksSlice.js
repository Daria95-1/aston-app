import { createSlice } from "@reduxjs/toolkit"; 

export const booksSlice = createSlice({
    name: 'books',
    initialState: {},
    reducers: {
        firstLoading: (state, action) => {
            
        }
    }
})

export default booksSlice.reducer;