import { Axios } from "../../../api/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTestimonalData = createAsyncThunk(
    "testimonal/getTestimonalData",
    async () => {
        const response = await Axios.getTestimonal();
        return response.data;
    },
);
