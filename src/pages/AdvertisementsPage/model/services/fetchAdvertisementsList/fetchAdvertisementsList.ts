import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Advertisement } from 'entities/Advertisement';

export const fetchAdvertisementsList = createAsyncThunk<Advertisement[], void, ThunkConfig<string>>(
    'advertisementsPage/fetchAdvertisementsList',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<Advertisement[]>('/advertisements');

            if (!response.data) throw new Error();

            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue('Ошибка получения данных');
        }
    },
);
