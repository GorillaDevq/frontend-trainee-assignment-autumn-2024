import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Advertisement } from 'entities/Advertisement';
import {
    getAdvertisementPageOrder,
    getAdvertisementPageSearch,
    getAdvertisementPageSort,
} from '../../selectors/advertisementsPage';

type fetchAdvertisementsListProps = {
    replace?: boolean;
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

        try {
            const response = await extra.api.get<Advertisement[]>('/advertisements', {
                params: {
                    _sort: sort,
                    _order: order,
                    ...(name?.length > 0 && { name }),
                },
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue('Ошибка получения данных');
        }
    },
);
