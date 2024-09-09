/* eslint-disable max-len */
import { StateSchema } from 'app/providers/StoreProvider';

export const getAdvertisementPageData = (state: StateSchema) => state.advertisementsPage?.listData;
export const getAdvertisementPageIsLoading = (state: StateSchema) => state.advertisementsPage?.isLoading;
export const getAdvertisementPageError = (state: StateSchema) => state.advertisementsPage?.error;
// Селекторы для рендера
export const getAdvertisementPageAmountToRender = (state: StateSchema) => state.advertisementsPage?.amountToRender;
export const getAdvertisementPageEndNumberToRender = (state: StateSchema) => state.advertisementsPage?.endNumberToRender;
// Сортировка
export const getAdvertisementPageOrder = (state: StateSchema) => state.advertisementsPage?.order;
export const getAdvertisementPageSort = (state: StateSchema) => state.advertisementsPage?.sort;
export const getAdvertisementPageSearch = (state: StateSchema) => state.advertisementsPage?.search;
