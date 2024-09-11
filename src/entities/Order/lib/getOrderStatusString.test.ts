import { getOrderStatusString } from './getOrderStatusString';

const OrderStatus = {
    Created: 0,
    Paid: 1,
    Transport: 2,
    DeliveredToThePoint: 3,
    Received: 4,
    Archived: 5,
    Refund: 6,
} as const;

describe('getOrderStatusString', () => {
    it('"Создан"', () => {
        expect(getOrderStatusString(OrderStatus.Created)).toBe('Создан');
    });

    it('"Оплачен"', () => {
        expect(getOrderStatusString(OrderStatus.Paid)).toBe('Оплачен');
    });

    it('"В пути"', () => {
        expect(getOrderStatusString(OrderStatus.Transport)).toBe('В пути');
    });

    it('"Доставлен в СРЦ"', () => {
        expect(getOrderStatusString(OrderStatus.DeliveredToThePoint)).toBe('Доставлен в СРЦ');
    });

    it('"Получен"', () => {
        expect(getOrderStatusString(OrderStatus.Received)).toBe('Получен');
    });

    it('"Архив"', () => {
        expect(getOrderStatusString(OrderStatus.Archived)).toBe('Архив');
    });

    it('"Возврат"', () => {
        expect(getOrderStatusString(OrderStatus.Refund)).toBe('Возврат');
    });

    it('Undefined', () => {
        // @ts-ignore - специальный тест для инкорректного статуса
        expect(getOrderStatusString(999)).toBeUndefined();
    });
});
