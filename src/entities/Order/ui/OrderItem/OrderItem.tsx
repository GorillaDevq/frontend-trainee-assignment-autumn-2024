import { classNames } from 'shared/lib/classNames/classNames';
import { formatDate } from 'shared/lib/formatDate/formatDate';
import { Button } from 'shared/ui/Button/Button';
import cls from './OrderItem.module.scss';
import { getOrderStatusString } from '../../lib/getOrderStatusString';

type OrderItemProps = {
    className?: string;
    order: Order;
}

export const OrderItem = ({
    className,
    order,
}:OrderItemProps) => {
    const {
        id,
        status,
        createdAt,
        items,
        total,
    } = order;

    return (
        <div className={classNames(cls.order, {}, [className])}>
            <div className={cls.order__info}>
                <h2>Номер заказа: {id}</h2>
                <span>{getOrderStatusString(status)}</span>
            </div>
            <ul className={cls.order__description}>
                <li>Товары: {items.length}</li>
                <li>Стоимость: {total}</li>
                <li>Создан: {formatDate(createdAt)}</li>
            </ul>
            <div>
                <Button type="button">Завершить</Button>
                <Button type="button">Показать </Button>
            </div>
        </div>
    );
};
