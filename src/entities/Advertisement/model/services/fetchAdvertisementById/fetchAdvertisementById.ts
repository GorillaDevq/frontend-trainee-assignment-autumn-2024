import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ERROR_MESSAGE } from 'shared/const/common';

export const fetchAdvertisementById = createAsyncThunk<
    Advertisement,
    string,
    ThunkConfig<string>
>(
    'orderDetails/fetchAdvertisementById',
    async (id, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<Advertisement>(`/advertisements/${id}`);

            if (!response.data) throw new Error();

            return response.data;
        } catch (err) {
            return rejectWithValue(ERROR_MESSAGE);
        }
    },
);
