import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async() => {
        const response = await axios.get("http://localhost:5000/products")
        // const response = await axios.get("http://localhost:5000/productss")
        return response?.data
    }
);

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    // extraReducers: {
    //     [productsFetch.pending]: (state, action) => {
    //         state.status = "pending"
    //     },
    //     [productsFetch.fulfilled]: (state, action) => {
    //         state.status = "success"
    //         state.items = action.payload
    //     },
    //     [productsFetch.rejected]: (state, action) => {
    //         state.status = "rejected"
    //     }
    // }
    extraReducers: (builder) => {
        builder
            .addCase(
                productsFetch.pending,
                (state, action) => {
                    state.status = "pending"
                }
            )
            .addCase(
                    productsFetch.fulfilled,
                    (state, action) => {
                        state.status = "success"
                        state.items = action.payload 
                    }
            )
            .addCase(
                productsFetch.rejected,
                (state, action) => {
                    state.status = "rejected"
                }
            )
    }
});

export default productSlice.reducer;
