import { createSlice } from '@reduxjs/toolkit';
import {
    fetchAdvertisementsList,
} from '../services/fetchAdvertisementsList/fetchAdvertisementsList';
import { AdvertisementPageSchema } from '../types/advertisementPageSchema';

const initialState: AdvertisementPageSchema = {
    isLoading: false,
    error: undefined,
    listData: [],
    // для пагинации
    page: 1,
    totalCount: 0,
    limit: 10,
    // для сортировки
    sort: '',
    order: 'asc',
    search: '',
};

const advertisementsPageSlice = createSlice({
    name: 'advertisementsPage',
    initialState,
    reducers: {
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setOrder: (state, action) => {
            state.order = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        clearState: (state) => {
            Object.assign(state, initialState);
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
                { payload },
            ) => {
                state.isLoading = false;

                state.listData = payload.data;

                if (state.totalCount !== payload.totalCount) state.totalCount = payload.totalCount;
            })
            .addCase(fetchAdvertisementsList.rejected, (state, action) => {
                state.isLoading = false;
                state.listData = [];
                state.error = action.payload;
            });
    },
});

export const { actions: advertisementsPageActions, reducer: advertisementsPageReducer } = advertisementsPageSlice;
