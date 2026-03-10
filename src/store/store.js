import { configureStore } from "@reduxjs/toolkit";
import { faqReducer, testimonalReducer, todosReducer } from "./slices";

const store = configureStore({
    reducer: {
        faq: faqReducer,
        todos: todosReducer,
        testimonal: testimonalReducer,
    },
});

export default store;
