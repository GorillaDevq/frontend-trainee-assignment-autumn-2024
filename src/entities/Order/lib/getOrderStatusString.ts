const OrderStatus = {
    Created: 0,
    Paid: 1,
    Transport: 2,
    DeliveredToThePoint: 3,
    Received: 4,
    Archived: 5,
    Refund: 6,
} as const;

const OrderStatusMap = {
    [OrderStatus.Created]: 'Создан',
    [OrderStatus.Paid]: 'Оплачен',
    [OrderStatus.Transport]: 'В пути',
    [OrderStatus.DeliveredToThePoint]: 'Доставлен в СРЦ',
    [OrderStatus.Received]: 'Получен',
    [OrderStatus.Archived]: 'Архим',
    [OrderStatus.Refund]: 'Возврат',
} as const;

export const getOrderStatusString = (status: typeof OrderStatus[keyof typeof OrderStatus]) => OrderStatusMap[status];
