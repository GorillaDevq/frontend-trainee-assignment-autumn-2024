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
        <Skeleton height={330} />
        <Skeleton height={25} />
        <Skeleton height={25} />
        <ul className={cls.list}>
            <Skeleton height={25} />
            <Skeleton height={25} />
        </ul>
        <Skeleton height={25} />
    </div>
);
