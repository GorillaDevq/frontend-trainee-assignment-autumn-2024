export type OrdersPageSchema = {
    isLoading: boolean;
    error?: string;
    listData: Order[];
    // Фильтры
    order: string;
    sort: string;
    status: number;
}
