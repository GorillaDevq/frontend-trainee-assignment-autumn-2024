import { StateSchema } from 'app/providers/StoreProvider';

export const getOrdersPageData = (state: StateSchema) => state
    .advertisementsPage?.listData;
export const getOrdersPageIsLoading = (state: StateSchema) => state
    .advertisementsPage?.isLoading;
export const getOrdersPageError = (state: StateSchema) => state
    .advertisementsPage?.error;
// Сортировка
export const getAdvertisementPageOrder = (state: StateSchema) => state.advertisementsPage?.order;
export const getAdvertisementPageSort = (state: StateSchema) => state.advertisementsPage?.sort;
