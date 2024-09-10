import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './OrderDetails.module.scss';

type OrderDetailsProps = {
    className?: string;
    orderItem?: OrderItem;
}

export const OrderDetails = ({
    className,
    orderItem,
}: OrderDetailsProps) => (
    <Link
        to={`${RoutePath.advertisements_details}${orderItem?.id}`}
        className={classNames(cls.order, {}, [className])}
    >
        <h3>{orderItem?.name}</h3>
        <span>{orderItem?.count}</span>
        <img
            className={cls.order__image}
            src={orderItem?.imageUrl}
            alt={orderItem?.name}
        />
    </Link>
);
