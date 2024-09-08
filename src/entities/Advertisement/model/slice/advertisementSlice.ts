import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchAdvertisementById,
} from '../services/fetchAdvertisementByid/fetchAdvertisementByid';
import { Advertisement } from '../types/advertisement';
import { AdvertisementDetailsSchema } from '../types/advertisementSchema';

const initialState: AdvertisementDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

const advertisementDetailsSlice = createSlice({
    name: 'advertisementDetails',
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

export const { actions: advertisementActions, reducer: advertisementReducer } = advertisementDetailsSlice;
