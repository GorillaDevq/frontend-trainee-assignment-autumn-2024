import { Advertisement } from 'entities/Advertisement';

export type AdvertisementPageSchema = {
    isLoading: boolean;
    error?: string;
    listData: Advertisement[];

    amountToRender: number;
    endNumberToRender: number;
    // Фильтры
    order: string;
    sort: string;
    search: string;
}
