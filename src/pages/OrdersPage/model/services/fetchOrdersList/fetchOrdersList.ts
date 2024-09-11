import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ERROR_MESSAGE } from 'shared/const/common';

import { ordersPageActions } from 'pages/OrdersPage';
import {
    getOrdersPageLimit,
    getOrdersPageNum,
    getOrdersPageOrder,
    getOrdersPageSort,
    getOrdersPageStatus,
} from '../../selectors/ordersPage';

type fetchOrdersListProps = {
    replace?: boolean;
    signal?: AbortSignal;
}

export const fetchOrdersList = createAsyncThunk<
    {
        data: Order[],
        totalCount: number,
    },
    fetchOrdersListProps,
    ThunkConfig<string>
>(
    'ordersPage/fetchOrdersList',
    async (payload, thunkApi) => {
        const {
            extra, rejectWithValue, getState, dispatch,
        } = thunkApi;

        const sort = getOrdersPageSort(getState());
        const status = getOrdersPageStatus(getState());
        const order = getOrdersPageOrder(getState());
        const limit = getOrdersPageLimit(getState());
        let page = getOrdersPageNum(getState());

        try {
            if (payload.replace) {
                page = 1;
                dispatch(ordersPageActions.setPage(page));
            }

            const response = await extra.api.get<Order[]>('/orders', {
                params: {
                    _order: order,
                    _page: page,
                    _sort: sort,
                    _limit: limit,
                    ...(status !== -1 && { status }),
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
