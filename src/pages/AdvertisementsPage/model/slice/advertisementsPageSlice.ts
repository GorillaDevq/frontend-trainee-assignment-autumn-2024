import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Advertisement } from 'entities/Advertisement';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    fetchAdvertisementsList,
} from '../services/fetchAdvertisementsList/fetchAdvertisementsList';
import { AdvertisementPageSchema } from '../types/advertisementPageSchema';

const advertisementsAdapter = createEntityAdapter<Advertisement>({
    selectId: (advertisement) => advertisement.id,
});

export const getAdvertisements = advertisementsAdapter.getSelectors<StateSchema>(
    (state) => state.advertisementsPage || advertisementsAdapter.getInitialState(),
);

const advertisementsPageSlice = createSlice({
    name: 'advertisementsPage',
    initialState: advertisementsAdapter.getInitialState<AdvertisementPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdvertisementsList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchAdvertisementsList.fulfilled, (
                state,
                action: PayloadAction<Advertisement[]>,
            ) => {
                state.isLoading = false;
                advertisementsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchAdvertisementsList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: advertisementsPageActions, reducer: advertisementsPageReducer } = advertisementsPageSlice;
