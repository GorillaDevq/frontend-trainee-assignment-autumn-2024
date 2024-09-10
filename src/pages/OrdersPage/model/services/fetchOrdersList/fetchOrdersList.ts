import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ERROR_MESSAGE } from 'shared/const/common';

import {
    getAdvertisementPageOrder,
    getAdvertisementPageSort,
} from '../../selectors/ordersPage';

type fetchOrdersListProps = {
    replace?: boolean;
}

export const fetchOrdersList = createAsyncThunk<
    Advertisement[],
    fetchOrdersListProps,
    ThunkConfig<string>
>(
    'ordersPage/fetchOrdersList',
    async (props, thunkApi) => {
        const {
            extra, rejectWithValue, getState,
        } = thunkApi;

        const sort = getAdvertisementPageSort(getState());
        const order = getAdvertisementPageOrder(getState());

        try {
            const response = await extra.api.get<Advertisement[]>('/orders', {
                params: {
                    _sort: sort,
                    _order: order,
                },
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue(ERROR_MESSAGE);
        }
    },
);
