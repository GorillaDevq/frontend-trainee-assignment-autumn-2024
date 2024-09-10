export type OrdersPageSchema = {
    isLoading: boolean;
    error?: string;
    listData: Advertisement[];
    // Фильтры
    order: string;
    sort: string;
}
