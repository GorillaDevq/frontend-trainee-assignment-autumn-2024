export const getOrderStatusString = (status: typeof OrderStatus[keyof typeof OrderStatus]) => OrderStatusMap[status];
