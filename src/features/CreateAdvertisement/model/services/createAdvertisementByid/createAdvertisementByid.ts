import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Advertisement } from 'entities/Advertisement';

type createAdvertisementByIdPayload = Pick<Advertisement, 'name' | 'description' | 'price' | 'imageUrl'>

export const createAdvertisementByid = createAsyncThunk<
    Advertisement,
    createAdvertisementByIdPayload,
    ThunkConfig<string>
>(
    'advertisementToEdit/editAdvertisementById',
    async (advertisementData, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        const dateNow = new Date().toISOString();
        try {
            const response = await extra.api.post<Advertisement>('/advertisements', {
                createdAt: dateNow,
                views: 0,
                likes: 0,
                ...advertisementData,
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (err) {
            return rejectWithValue('Ошибка запроса данных');
        }
    },
);
