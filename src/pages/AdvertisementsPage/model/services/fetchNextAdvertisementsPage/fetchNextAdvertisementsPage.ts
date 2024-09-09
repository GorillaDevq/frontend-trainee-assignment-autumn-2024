// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { ThunkConfig } from 'app/providers/StoreProvider';
// import {
//     getAdvertisementPageHasMore,
//     getAdvertisementPageIsLoading,
//     getAdvertisementPageNumber,
// } from '../../selectors/advertisementsPage';
// import { advertisementsPageActions } from '../../slice/advertisementsPageSlice';
// import {
//     fetchAdvertisementsList,
// } from '../../services/fetchAdvertisementsList/fetchAdvertisementsList';
//
// export const fetchNextAdvertisementsPage = createAsyncThunk<
//     void,
//     void,
//     ThunkConfig<string>
//     >(
//         'advertisementsPage/fetchNextAdvertisementsPage',
//         async (_, thunkApi) => {
//             const { getState, dispatch } = thunkApi;
//             const hasMore = getAdvertisementPageHasMore(getState());
//             const page = getAdvertisementPageNumber(getState());
//             const isLoading = getAdvertisementPageIsLoading(getState());
//
//             if (hasMore && !isLoading) {
//                 dispatch(advertisementsPageActions.setPage(page + 1));
//                 dispatch(fetchAdvertisementsList({}));
//             }
//         },
//     );
