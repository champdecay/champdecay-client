import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        posts: [],
        loading: false,
        error: null,
    },
    reducers: {
        getPosts: (state, action) => {
            state.loading = true;
            state.error = null;
        }
    }
});


export const { getPosts } = blogSlice.actions;
export default blogSlice.reducer;