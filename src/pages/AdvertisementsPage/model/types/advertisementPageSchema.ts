export type AdvertisementPageSchema = {
    isLoading: boolean;
    error?: string;
    listData: Advertisement[];
    // Пагинация
    page: number;
    totalCount: number;
    limit: number;
    // Фильтры
    order: string;
    sort: string;
    search: string;
}
