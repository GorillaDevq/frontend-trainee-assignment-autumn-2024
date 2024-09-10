import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchAdvertisementsList,
} from '../services/fetchAdvertisementsList/fetchAdvertisementsList';
import { AdvertisementPageSchema } from '../types/advertisementPageSchema';

const initialState: AdvertisementPageSchema = {
    isLoading: false,
    error: undefined,
    listData: [],
    // для пагинации
    amountToRender: 10,
    endNumberToRender: 10,
    startNumberToRender: 0,
    hasMore: true,
    // для сортировки
    sort: '',
    search: '',
    order: 'asc',
};

const advertisementsPageSlice = createSlice({
    name: 'advertisementsPage',
    initialState,
    reducers: {
        setStartNumberToRender: (state, action: PayloadAction<number>) => {
            state.startNumberToRender = action.payload;
        },
        setEndNumberToRender: (state, action: PayloadAction<number>) => {
            state.endNumberToRender = action.payload;
        },
        setAmountToRender: (state, action: PayloadAction<number>) => {
            state.amountToRender = action.payload;
        },
        setNewData: (state, action) => {
            state.listData = action.payload;
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
                action,
            ) => {
                state.isLoading = false;

                if (action.meta.arg.replace) {
                    state.listData = action.payload;
                    state.endNumberToRender = state.amountToRender;
                    state.startNumberToRender = 0;
                } else {
                    state.listData = [...state.listData, ...action.payload];
                }
                state.hasMore = action.payload.length >= state.endNumberToRender;
            })
            .addCase(fetchAdvertisementsList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: advertisementsPageActions, reducer: advertisementsPageReducer } = advertisementsPageSlice;
