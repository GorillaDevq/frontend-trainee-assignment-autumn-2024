import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchOrderById,
} from '../services/fetchOrderById/fetchOrderById';
import { OrderDetailsSchema } from '../types/orderDetailsSchema';

const initialState: OrderDetailsSchema = {
    isLoading: false,
    error: undefined,
    order: undefined,
};

const orderDetailsSlice = createSlice({
    name: 'orderDetails',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrderById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchOrderById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchOrderById.fulfilled, (state, action: PayloadAction<Order>) => {
                state.isLoading = false;
                state.error = undefined;
                state.order = action.payload;
            });
    },
});

export const { actions: orderDetailsActions, reducer: orderDetailsReducer } = orderDetailsSlice;
