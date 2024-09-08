import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Advertisement } from '../../types/advertisement';

export const fetchAdvertisementById = createAsyncThunk<Advertisement, string, ThunkConfig<string>>(
    'advertisementDetails/fetchAdvertisementById',
    async (advertisementId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<Advertisement>(`/advertisements/${advertisementId}`);

            if (!response.data) throw new Error();

            return response.data;
        } catch (err) {
            return rejectWithValue('Ошибка запроса данных');
        }
    },
);
