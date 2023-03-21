import { createSlice } from "@reduxjs/toolkit";
import { fetchCarts } from "./asyncActions";
import { ICartSliceState, Status } from "./types";

const initialState: ICartSliceState = {
    offset: 0,
    total: 0,
    items: [],
    status: Status.LOADING   //'loading' | 'success' | 'error';
  };
  
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addOffset(state) {
        state.offset += 10;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarts.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchCarts.fulfilled, (state, action) => {
        state.total = action.payload.total;
        state.items = [...state.items, ...action.payload.items];
        state.status = Status.SUCCESS; 
      })
      .addCase(fetchCarts.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      })
    }
});

export const { addOffset } = cartSlice.actions;
  
export default cartSlice.reducer;