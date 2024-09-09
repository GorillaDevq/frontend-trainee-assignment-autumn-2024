import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Advertisement } from 'entities/Advertisement';

type editAdvertisementByIdPayload = Partial<Advertisement>

export const createAdvertisementByid = createAsyncThunk<
    Advertisement,
    editAdvertisementByIdPayload,
    ThunkConfig<string>
>(
    'advertisementToEdit/editAdvertisementById',
    async ({ id, ...advertisementData }, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.patch<Advertisement>(`/advertisements/${id}`, advertisementData);

            if (!response.data) throw new Error();

            return response.data;
        } catch (err) {
            return rejectWithValue('Ошибка запроса данных');
        }
    },
);
