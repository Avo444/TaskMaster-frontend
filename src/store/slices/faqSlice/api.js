import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../api/axios";

export const getFaqData = createAsyncThunk("faq/getFaqData", async () => {
    const response = await Axios.getFaq();
    return response.data;
});
