export type OrdersPageSchema = {
    isLoading: boolean;
    error?: string;
    listData: Order[];
    orderItemsDetails: OrderItem[];
    // Фильтры
    order: string;
    sort: string;
    status: number;
}
