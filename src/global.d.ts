declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

type Advertisement = {
    /* Уникальный идентификатор. */
    id: string;
    /* Название. */
    name: string;
    /* Описание. */
    description?: string;
    /* Цена. */
    price: number;
    /* Дата и время создания. */
    createdAt: string;
    /* Количество просмотров. */
    views: number;
    /* Количество лайков. */
    likes: number;
    /* Ссылка на изображение. */
    imageUrl?: string;
}

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

type OrderItem = Advertisement & { count: number; };

type Order = {
    /* Уникальный идентификатор. */
    id: string;
    /* Статус. */
    status: typeof OrderStatus[keyof typeof OrderStatus];
    /* Дата и время создания. */
    createdAt: string;
    /* Дата и время завершения. */
    finishedAt?: string;
    /* Товары в заказе. */
    items: Array<OrderItem>;
    /* Способ доставки(Почта, СДЭК...) */
    deliveryWay: string;
    /* Сумма заказа */
    total: number;
}

type Image = {
    /* Уникальный идентификатор. */
    id: number;
    /* Ссылка. */
    url: string;
    /* Название. */
    name: string;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.woff';
declare module '*.woff2';

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: string;
