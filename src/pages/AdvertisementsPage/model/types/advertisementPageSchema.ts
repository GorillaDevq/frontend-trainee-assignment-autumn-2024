export type AdvertisementPageSchema = {
    isLoading: boolean;
    error?: string;
    listData: Advertisement[];
    // Пагинация
    amountToRender: number;
    endNumberToRender: number;
    startNumberToRender: number;
    hasMore: boolean;
    // Фильтры
    order: string;
    sort: string;
    search: string;
}
