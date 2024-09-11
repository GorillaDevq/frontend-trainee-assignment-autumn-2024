import { createSlice } from '@reduxjs/toolkit';
import { fetchOrderDetails } from 'pages/OrdersPage/model/services/fetchOrderDetails/fetchOrderDetails';
import { deleteOrderById } from 'entities/Order';

import {
    fetchOrdersList,
} from '../services/fetchOrdersList/fetchOrdersList';
import { OrdersPageSchema } from '../types/ordersPageSchema';

const initialState: OrdersPageSchema = {
    isLoading: false,
    error: undefined,
    listData: [],
    orderItemsDetails: [],
    // для пагинации
    page: 1,
    totalCount: undefined,
    limit: 6,
    // для сортировки
    sort: '',
    order: 'asc',
    status: -1,
};

const ordersPageSlice = createSlice({
    name: 'ordersPage',
    initialState,
    reducers: {
        setOrder: (state, action) => {
            state.order = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        clearState: (state) => {
            Object.assign(state, initialState);
        },
        setNewData: (state, action) => {
            state.listData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrdersList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchOrdersList.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.listData = payload.data;
                if (state.totalCount !== payload.totalCount) state.totalCount = payload.totalCount;
            })
            .addCase(fetchOrdersList.rejected, (state, action) => {
                state.isLoading = true;
                state.error = action.payload;
            })
            .addCase(fetchOrderDetails.fulfilled, (state, action) => {
                state.orderItemsDetails = action.payload;
            })
            .addCase(deleteOrderById.fulfilled, (state, action) => {
                state.listData = state.listData.filter((order) => order.id !== action.payload);
            });
    },
});

export const { actions: ordersPageActions, reducer: ordersPageReducer } = ordersPageSlice;
