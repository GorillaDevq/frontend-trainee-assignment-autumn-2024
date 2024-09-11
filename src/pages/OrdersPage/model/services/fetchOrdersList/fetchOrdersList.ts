import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ERROR_MESSAGE } from 'shared/const/common';

import { ordersPageActions } from 'pages/OrdersPage';
import {
    getOrdersPageOrder,
    getOrdersPageSort, getOrdersPageStatus,
} from '../../selectors/ordersPage';

type fetchOrdersListProps = {
    replace?: boolean;
    signal?: AbortSignal;
}

export const fetchOrdersList = createAsyncThunk<
    Order[],
    fetchOrdersListProps,
    ThunkConfig<string>
>(
    'ordersPage/fetchOrdersList',
    async (props, thunkApi) => {
        const {
            extra, rejectWithValue, getState, dispatch,
        } = thunkApi;

        const sort = getOrdersPageSort(getState());
        const order = getOrdersPageOrder(getState());
        const status = getOrdersPageStatus(getState());

        try {
            if (props.replace) {
                dispatch(ordersPageActions.setNewData([]));
            }

            const response = await extra.api.get<Order[]>('/orders', {
                params: {
                    _sort: sort,
                    _order: order,
                    ...(status !== -1 && { status }),
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
