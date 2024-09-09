import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchAdvertisementsList,
} from '../services/fetchAdvertisementsList/fetchAdvertisementsList';
import { AdvertisementPageSchema } from '../types/advertisementPageSchema';

const initialState: AdvertisementPageSchema = {
    isLoading: false,
    error: undefined,
    listData: [],

    amountToRender: 10,
    endNumberToRender: 10,

    sort: 'price',
    search: '',
    order: 'asc',
};

const advertisementsPageSlice = createSlice({
    name: 'advertisementsPage',
    initialState,
    reducers: {
        setEndNumberToRender: (state, action: PayloadAction<number>) => {
            state.endNumberToRender = action.payload;
        },
        setAmountToRender: (state, action: PayloadAction<number>) => {
            state.amountToRender = action.payload;
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

                if (action.meta.arg.replace) {
                    state.listData = action.payload;
                    state.endNumberToRender = state.amountToRender;
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
