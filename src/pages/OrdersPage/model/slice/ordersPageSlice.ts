import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchOrdersList,
} from '../services/fetchOrdersList/fetchOrdersList';
import { OrdersPageSchema } from '../types/ordersPageSchema';

const initialState: OrdersPageSchema = {
    isLoading: false,
    error: undefined,
    listData: [],
    // для сортировки
    sort: '',
    order: 'asc',
    status: -1,
};

const ordersPageSlice = createSlice({
    name: 'ordersPage',
    initialState,
    reducers: {
        setOrder: (state, action: PayloadAction<string>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<string>) => {
            state.sort = action.payload;
        },
        setStatus: (state, action: PayloadAction<number>) => {
            state.status = action.payload;
        },
        clearState: (state) => {
            Object.assign(state, initialState);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrdersList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchOrdersList.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;

                if (action.meta.arg.replace) {
                    state.listData = action.payload;
                } else {
                    state.listData = [...state.listData, ...action.payload];
                }
            })
            .addCase(fetchOrdersList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: ordersPageActions, reducer: ordersPageReducer } = ordersPageSlice;
