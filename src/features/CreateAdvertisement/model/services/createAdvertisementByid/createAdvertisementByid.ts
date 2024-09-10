import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { formActions } from 'entities/Form';
import { ERROR_MESSAGE } from 'shared/const/common';

type createAdvertisementByIdPayload = Pick<Advertisement, 'name' | 'description' | 'price' | 'imageUrl'>

export const createAdvertisementByid = createAsyncThunk<
    Advertisement,
    createAdvertisementByIdPayload,
    ThunkConfig<string>
>(
    'advertisementToEdit/editAdvertisementById',
    async (advertisementData, thunkApi) => {
        const { extra, rejectWithValue, dispatch } = thunkApi;
        const dateNow = new Date().toISOString();

        try {
            dispatch(formActions.setIsLoading(true));
            dispatch(formActions.setError(undefined));
            const response = await extra.api.post<Advertisement>('/advertisements', {
                createdAt: dateNow,
                views: 0,
                likes: 0,
                ...advertisementData,
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (err) {
            dispatch(formActions.setError(undefined));
            return rejectWithValue(ERROR_MESSAGE);
        } finally {
            dispatch(formActions.setIsLoading(false));
        }
    },
);
