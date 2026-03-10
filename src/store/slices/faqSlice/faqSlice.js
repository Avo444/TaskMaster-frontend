import { getFaqData } from "./api";

const { createSlice } = require("@reduxjs/toolkit");

const faqSlice = createSlice({
    name: "faq",
    initialState: {
        data: [],
        error: null,
        loader: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFaqData.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(getFaqData.fulfilled, (state, action) => {
            state.loader = false;
            state.data = action.payload
        })
        builder.addCase(getFaqData.rejected, (state, action) => {
            state.loader = false;
            state.error = action.error.message;
        })
    },
    selectors: {
        getFaq: (state) => state.data,
        getFaqError: (state) => state.error,
        getFaqLoader: (state) => state.loader,
    },
});

export const faqReducer = faqSlice.reducer;
export const { getFaq, getFaqError, getFaqLoader } = faqSlice.selectors;
