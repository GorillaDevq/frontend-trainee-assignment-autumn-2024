import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ERROR_MESSAGE } from 'shared/const/common';

export const deleteOrderById = createAsyncThunk<string, string, ThunkConfig<string>>(
    'advertisementDetails/deleteOrderById',
    async (advertisementId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.delete<Order>(`/orders/${advertisementId}`);

            if (!response.data) throw new Error();

            return advertisementId;
        } catch (err) {
            return rejectWithValue(ERROR_MESSAGE);
        }
    },
);
