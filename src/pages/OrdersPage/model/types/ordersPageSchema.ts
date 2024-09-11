export type OrdersPageSchema = {
    isLoading: boolean;
    error?: string;
    listData: Order[];
    orderItemsDetails: OrderItem[];
    // Пагинация
    page: number;
    totalCount: number;
    limit: number;
    // Фильтры
    order: string;
    sort: string;
    status: number;
}
