import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { advertisementsPageActions } from 'pages/AdvertisementsPage';
import { ERROR_MESSAGE } from 'shared/const/common';
import {
    getAdvertisementPageAmountToRender,
    getAdvertisementPageEndNumberToRender,
    getAdvertisementPageOrder,
    getAdvertisementPageSearch,
    getAdvertisementPageSort,
    getAdvertisementPageStartNumberToRender,
} from '../../selectors/advertisementsPage';

type fetchAdvertisementsListProps = {
    replace?: boolean;
    signal?: AbortSignal;
}

export const fetchAdvertisementsList = createAsyncThunk<
    Advertisement[],
    fetchAdvertisementsListProps,
    ThunkConfig<string>
>(
    'advertisementsPage/fetchAdvertisementsList',
    async (props, thunkApi) => {
        const {
            extra, rejectWithValue, getState, dispatch,
        } = thunkApi;
        const sort = getAdvertisementPageSort(getState());
        const order = getAdvertisementPageOrder(getState());
        const name = getAdvertisementPageSearch(getState());
        const amount = getAdvertisementPageAmountToRender(getState());
        let start = getAdvertisementPageStartNumberToRender(getState());
        let limit = getAdvertisementPageEndNumberToRender(getState());

        try {
            if (props.replace) {
                start = 0;
                limit = amount;
                dispatch(advertisementsPageActions.setNewData([]));
            }

            const response = await extra.api.get<Advertisement[]>('/advertisements', {
                params: {
                    _start: start,
                    _limit: limit,
                    _sort: sort,
                    _order: order,
                    ...(name?.length > 0 && { name }),
                },
                signal: props.signal,
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (err) {
            return rejectWithValue(ERROR_MESSAGE);
        }
    },
);
