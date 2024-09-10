import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ERROR_MESSAGE } from 'shared/const/common';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export const fetchOrderDetails = createAsyncThunk<
    OrderItem[],
    string,
    ThunkConfig<string>
>(
    'ordersPage/fetchOrderDetails',
    async (id, thunkApi) => {
        const {
            extra, rejectWithValue,
        } = thunkApi;

        try {
            const response = await extra.api.get<Order>(`${RoutePath.orders}/${id}`);

            if (!response.data) throw new Error();

            return response.data.items;
        } catch (err) {
            return rejectWithValue(ERROR_MESSAGE);
        }
    },
);
