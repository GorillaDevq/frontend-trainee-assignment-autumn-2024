import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { advertisementsPageActions } from 'pages/AdvertisementsPage';
import { ERROR_MESSAGE } from 'shared/const/common';
import {
    getAdvertisementPageLimit,
    getAdvertisementPageNum,
    getAdvertisementPageOrder,
    getAdvertisementPageSearch,
    getAdvertisementPageSort,
} from '../../selectors/advertisementsPage';

type fetchAdvertisementsListPayload = {
    replace?: boolean;
    signal?: AbortSignal;
}

export const fetchAdvertisementsList = createAsyncThunk<
    {
        totalCount: number;
        data: Advertisement[];
    },
    fetchAdvertisementsListPayload,
    ThunkConfig<string>
>(
    'advertisementsPage/fetchAdvertisementsList',
    async (payload, thunkApi) => {
        const {
            extra, rejectWithValue, getState, dispatch,
        } = thunkApi;
        const sort = getAdvertisementPageSort(getState());
        const name = getAdvertisementPageSearch(getState());
        const limit = getAdvertisementPageLimit(getState());
        const order = getAdvertisementPageOrder(getState());
        let page = getAdvertisementPageNum(getState());

        try {
            if (payload.replace) {
                page = 1;
                dispatch(advertisementsPageActions.setPage(page));
            }

            const response = await extra.api.get<Advertisement[]>('/advertisements', {
                params: {
                    _page: page,
                    _order: order,
                    _limit: limit,
                    _sort: sort,
                    ...(name?.length > 0 && { name }),
                },
                signal: payload.signal,
            });

            const totalCount = Number(response.headers['x-total-count']);

            if (!response.data) throw new Error();

            return { totalCount, data: response.data };
        } catch (err) {
            return rejectWithValue(ERROR_MESSAGE);
        }
    },
);
