import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from '../Order/Order.module.scss';

export const OrderSkeleton = () => (
    <div className={cls.order}>
        <div className={cls.order__info}>
            <Skeleton height={90} />
            <Skeleton height={26} />
        </div>
        <Skeleton height={84} />
        <div className={cls.buttons}>
            <Skeleton height={43} />
            <Skeleton height={43} />
        </div>
    </div>
);
