import { todosReducer } from "./slices";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        todos: todosReducer
    }
})

export default store;