import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { formActions } from 'entities/Form';
import { ERROR_MESSAGE } from 'shared/const/common';

type editAdvertisementByIdPayload = Partial<Advertisement>

export const editAdvertisementById = createAsyncThunk<Advertisement, editAdvertisementByIdPayload, ThunkConfig<string>>(
    'advertisementToEdit/editAdvertisementById',
    async ({ id, ...advertisementData }, thunkApi) => {
        const { extra, rejectWithValue, dispatch } = thunkApi;

        try {
            dispatch(formActions.setIsLoading(true));
            dispatch(formActions.setError(undefined));

            const response = await extra.api.patch<Advertisement>(`/advertisements/${id}`, advertisementData);

            if (!response.data) throw new Error();

            return response.data;
        } catch (err) {
            dispatch(formActions.setError(ERROR_MESSAGE));
            return rejectWithValue(ERROR_MESSAGE);
        } finally {
            dispatch(formActions.setIsLoading(false));
        }
    },
);
