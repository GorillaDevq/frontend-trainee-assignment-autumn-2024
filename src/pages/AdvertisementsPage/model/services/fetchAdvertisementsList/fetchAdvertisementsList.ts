import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Advertisement } from 'entities/Advertisement';
import {
    getAdvertisementPageLimit, getAdvertisementPageNumber,
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
        const { extra, rejectWithValue, getState } = thunkApi;

        const limit = getAdvertisementPageLimit(getState());
        const sort = getAdvertisementPageSort(getState());
        const order = getAdvertisementPageOrder(getState());
        const search = getAdvertisementPageSearch(getState());
        const page = getAdvertisementPageNumber(getState());

        try {
            const response = await extra.api.get<Advertisement[]>('/advertisements', {
                params: {
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
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
