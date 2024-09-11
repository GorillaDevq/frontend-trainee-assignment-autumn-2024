import { StateSchema } from 'app/providers/StoreProvider';

export const getOrdersPageData = (state: StateSchema) => state
    .ordersPage?.listData;
export const getOrderItemsPage = (state: StateSchema) => state
    .ordersPage?.orderItemsDetails;
export const getOrdersPageIsLoading = (state: StateSchema) => state
    .ordersPage?.isLoading;
export const getOrdersPageError = (state: StateSchema) => state
    .ordersPage?.error;
// Пагинация
export const getOrdersPageNum = (state: StateSchema) => state
    .ordersPage?.page;
export const getOrdersPageLimit = (state: StateSchema) => state
    .ordersPage?.limit;
export const getOrdersPageTotalData = (state: StateSchema) => state
    .ordersPage?.totalCount;
// Сортировка
export const getOrdersPageOrder = (state: StateSchema) => state.ordersPage?.order;
export const getOrdersPageSort = (state: StateSchema) => state.ordersPage?.sort;
export const getOrdersPageStatus = (state: StateSchema) => state.ordersPage?.status;
