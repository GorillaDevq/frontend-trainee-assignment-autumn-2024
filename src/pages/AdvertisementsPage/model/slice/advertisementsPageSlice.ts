import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchAdvertisementsList,
} from '../services/fetchAdvertisementsList/fetchAdvertisementsList';
import { AdvertisementPageSchema } from '../types/advertisementPageSchema';

const initialState: AdvertisementPageSchema = {
    isLoading: false,
    error: undefined,
    listData: [],

    page: 1,
    limit: 3,
    hasMore: true,

    sort: 'price',
    search: '',
    order: 'asc',
};

const advertisementsPageSlice = createSlice({
    name: 'advertisementsPage',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<string>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<string>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdvertisementsList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchAdvertisementsList.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    state.listData = action.payload;
                } else {
                    state.listData = [...state.listData, ...action.payload];
                }
            })
            .addCase(fetchAdvertisementsList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: advertisementsPageActions, reducer: advertisementsPageReducer } = advertisementsPageSlice;
