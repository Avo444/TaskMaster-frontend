import { getTestimonalData } from "./api";

const { createSlice } = require("@reduxjs/toolkit");

const testimonalSlice = createSlice({
    name: "testimonal",
    initialState: {
        data: [],
        error: null,
        loader: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTestimonalData.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(getTestimonalData.fulfilled, (state, action) => {
            state.loader = false;
            state.data = action.payload;
            
        });
        builder.addCase(getTestimonalData.rejected, (state, action) => {
            state.loader = false;
            state.error = action.error.message;
        });
    },
    selectors: {
        getTestimonal: (state) => state.data,
        getTestimonalError: (state) => state.error,
        getTestimonalLoader: (state) => state.loader,
    },
});

export const testimonalReducer = testimonalSlice.reducer;
export const { getTestimonal, getTestimonalError, getTestimonalLoader } =
    testimonalSlice.selectors;
