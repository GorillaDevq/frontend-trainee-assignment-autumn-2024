import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from '../AdvertisementItem/AdvertisementItem.module.scss';

type AdvertisementItemProps = {
    className?: string;
}

export const AdvertisementItemSkeleton = ({
    className,
}: AdvertisementItemProps) => (
    <div className={classNames(cls.advertisement, {}, [className])}>
        <Skeleton className={cls.advertisement__image} height={330} />
        <Skeleton className={cls.title} height={25} />
        <Skeleton className={cls.price} height={25} />
        <ul className={cls.list}>
            <Skeleton className={cls.item} height={25} />
            <Skeleton className={cls.item} height={25} />
        </ul>
        <Skeleton className={cls.button} height={25} />
    </div>
);
