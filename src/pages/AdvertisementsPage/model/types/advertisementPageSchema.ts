import { Advertisement } from 'entities/Advertisement';

export type AdvertisementPageSchema = {
    isLoading: boolean;
    error?: string;
    listData: Advertisement[];

    // Пагинация
    page: number;
    limit: number;
    hasMore: boolean;

    // Фильтры
    order: string;
    sort: string;
    search: string;
}
