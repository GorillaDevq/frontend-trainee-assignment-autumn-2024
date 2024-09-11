import { classNames } from 'shared/lib/classNames/classNames';
import { formatDate } from 'shared/lib/formatDate/formatDate';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Order.module.scss';
import { getOrderStatusString } from '../../lib/getOrderStatusString';

type OrderItemProps = {
    className?: string;
    order: Order;
    onClick: (id: string) => void;
}

export const Order = ({
    className,
    order,
    onClick,
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
            <div className={cls.buttons}>
                <Button
                    theme={ButtonTheme.SECONDARY}
                    type="button"
                >
                    Завершить
                </Button>
                <Button
                    theme={ButtonTheme.SECONDARY}
                    onClick={() => onClick(id)}
                    type="button"
                >Посмотреть товары
                </Button>
            </div>
        </div>
    );
};
