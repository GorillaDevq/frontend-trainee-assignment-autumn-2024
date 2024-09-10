import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ERROR_MESSAGE } from 'shared/const/common';

export const fetchOrderById = createAsyncThunk<Order, string, ThunkConfig<string>>(
    'advertisementDetails/fetchAdvertisementById',
    async (advertisementId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<Order>(`/orders/${advertisementId}`);

            if (!response.data) throw new Error();

            return response.data;
        } catch (err) {
            return rejectWithValue(ERROR_MESSAGE);
        }
    },
);
