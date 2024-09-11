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
    [OrderStatus.DeliveredToThePoint]: 'В СРЦ',
    [OrderStatus.Received]: 'Получен',
    [OrderStatus.Archived]: 'Архив',
    [OrderStatus.Refund]: 'Возврат',
} as const;

export const SORT_BUTTONS_STATUS = [
    OrderStatus.Created,
    OrderStatus.Paid,
    OrderStatus.Transport,
    OrderStatus.DeliveredToThePoint,
    OrderStatus.Received,
    OrderStatus.Archived,
    OrderStatus.Refund,
];

export const getOrderStatusString = (status: typeof OrderStatus[keyof typeof OrderStatus]) => OrderStatusMap[status];
