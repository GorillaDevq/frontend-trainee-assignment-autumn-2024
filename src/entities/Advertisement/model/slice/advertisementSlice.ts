import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchAdvertisementById,
} from '../services/fetchAdvertisementByid/fetchAdvertisementByid';
import { Advertisement } from '../types/advertisement';
import { AdvertisementSchema } from '../types/advertisementSchema';

const initialState: AdvertisementSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

const advertisementSlice = createSlice({
    name: 'advertisement',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdvertisementById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAdvertisementById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchAdvertisementById.fulfilled, (state, action: PayloadAction<Advertisement>) => {
                state.isLoading = false;
                state.error = undefined;
                state.data = action.payload;
            });
    },
});

export const { actions: advertisementActions, reducer: advertisementReducer } = advertisementSlice;
