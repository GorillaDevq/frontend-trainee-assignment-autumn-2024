import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormSchema } from '../types/advertisementSchema';

const initialState: FormSchema = {
    isLoading: false,
    error: undefined,
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string | undefined>) => {
            state.error = action.payload;
        },
    },
});

export const { actions: formActions, reducer: formReducer } = formSlice;
