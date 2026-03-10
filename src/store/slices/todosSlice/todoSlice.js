import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        data: [],
        error: null,
        loader: false
    },
    reducers: {
        
    },
    selectors: {
        getTodos: (state) => state.data,
        getTodosError: (state) => state.error,
        getTodosLoader: (state) => state.loader,
    }
});

export const todosReducer = todosSlice.reducer;
export const {getTodos, getTodosError, getTodosLoader} = todosSlice.selectors;