import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "./api";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  status: null,
  error: null,
  createStatus: null,
  deleteStatus: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(`${url}/products`);

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//Advanced way of fetching data from an external API in RTK

export const createProducts = createAsyncThunk(
  "products/createProducts",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/products`,

        values,
        setHeaders()
      );
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (id) => {
    console.log("id in delete AsyncThunk", id);
    try {
      const response = await axios.delete(
        `${url}/products/${id}`,
        setHeaders()
      );
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      // RTK uses Immer to  update the immutably
      state.status = "pending";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchProducts.rejected]: (state, action) => {
      // RTK uses Immer to  update the immutably
      state.status = "rejected";
      state.error = action.payload;
    },

    [createProducts.pending]: (state, action) => {
      // RTK uses Immer to  update the immutably
      state.createStatus = "pending";
    },
    [createProducts.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.createStatus = "success";
      toast.success("Product Created");
    },
    [createProducts.rejected]: (state, action) => {
      // RTK uses Immer to  update the immutably
      state.createStatus = "rejected";
      state.error = action.payload;
    },

    [deleteProducts.pending]: (state, action) => {
      // RTK uses Immer to  update the immutably
      state.deleteStatus = "pending";
    },
    [deleteProducts.fulfilled]: (state, action) => {
      console.log("Delete payload is", action.payload);
      const newList = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      state.items = newList;
      state.deleteStatus = "success";
      toast.error("Product Deleted");
    },
    [deleteProducts.rejected]: (state, action) => {
      // RTK uses Immer to  update the immutably
      state.deleteStatus = "rejected";
    },
  },
});

export default productSlice.reducer;
