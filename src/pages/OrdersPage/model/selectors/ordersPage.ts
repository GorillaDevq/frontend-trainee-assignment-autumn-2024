import { StateSchema } from 'app/providers/StoreProvider';

export const getOrdersPageData = (state: StateSchema) => state
    .ordersPage?.listData;
export const getOrderItemsPage = (state: StateSchema) => state
    .ordersPage?.orderItemsDetails;
export const getOrdersPageIsLoading = (state: StateSchema) => state
    .ordersPage?.isLoading;
export const getOrdersPageError = (state: StateSchema) => state
    .ordersPage?.error;
// Сортировка
export const getOrdersPageOrder = (state: StateSchema) => state.ordersPage?.order;
export const getOrdersPageSort = (state: StateSchema) => state.ordersPage?.sort;
export const getOrdersPageStatus = (state: StateSchema) => state.ordersPage?.status;
