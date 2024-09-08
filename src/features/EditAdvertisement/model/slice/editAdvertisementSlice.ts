import { createSlice } from '@reduxjs/toolkit';

import {
    editAdvertisementById,
} from '../services/editAdvertisementByid/editAdvertisementByid';
import { EditAdvertisementSchema } from '../types/editAdvertisementSchema';

const initialState: EditAdvertisementSchema = {
    isLoading: false,
    error: undefined,
};

const editAdvertisementSlice = createSlice({
    name: 'advertisementToEdit',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(editAdvertisementById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editAdvertisementById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(editAdvertisementById.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            });
    },
});

export const { actions: advertisementToEditActions, reducer: advertisementToEditReducer } = editAdvertisementSlice;
