import { StateSchema } from 'app/providers/StoreProvider';

export const getOrdersPageData = (state: StateSchema) => state
    .ordersPage?.listData;
export const getOrdersPageIsLoading = (state: StateSchema) => state
    .ordersPage?.isLoading;
export const getOrdersPageError = (state: StateSchema) => state
    .ordersPage?.error;
// Сортировка
export const getAdvertisementPageOrder = (state: StateSchema) => state.ordersPage?.order;
export const getAdvertisementPageSort = (state: StateSchema) => state.ordersPage?.sort;
