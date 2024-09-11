import { StateSchema } from 'app/providers/StoreProvider';

export const getAdvertisementPageData = (state: StateSchema) => state
    .advertisementsPage?.listData;
export const getAdvertisementPageIsLoading = (state: StateSchema) => state
    .advertisementsPage?.isLoading;
export const getAdvertisementPageError = (state: StateSchema) => state
    .advertisementsPage?.error;
// Пагинация
export const getAdvertisementPageLimit = (state: StateSchema) => state
    .advertisementsPage?.limit;
export const getAdvertisementPageNum = (state: StateSchema) => state
    .advertisementsPage?.page;
export const getAdvertisementPageTotal = (state: StateSchema) => state
    .advertisementsPage?.totalCount;

// Сортировка
export const getAdvertisementPageOrder = (state: StateSchema) => state.advertisementsPage?.order;
export const getAdvertisementPageSort = (state: StateSchema) => state.advertisementsPage?.sort;
export const getAdvertisementPageSearch = (state: StateSchema) => state.advertisementsPage?.search;
