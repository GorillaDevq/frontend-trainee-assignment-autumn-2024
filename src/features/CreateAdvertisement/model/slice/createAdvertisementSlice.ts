import { createSlice } from '@reduxjs/toolkit';

import {
    createAdvertisementByid,
} from '../services/createAdvertisementByid/createAdvertisementByid';
import { CreateAdvertisementSchema } from '../types/createAdvertisementSchema';

const initialState: CreateAdvertisementSchema = {
    isLoading: false,
    error: undefined,
};

const createAdvertisementSlice = createSlice({
    name: 'advertisementToEdit',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(createAdvertisementByid.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createAdvertisementByid.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(createAdvertisementByid.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            });
    },
});

export const {
    actions: advertisementToCreateActions,
    reducer: advertisementToCreateReducer,
} = createAdvertisementSlice;
