import { classNames } from 'shared/lib/classNames/classNames';
import HeartIcon from 'shared/assets/icons/heart.svg';
import ViewsIcon from 'shared/assets/icons/views.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { formatNumber } from 'shared/lib/formatNumber/formatNumber';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './AdvertisementItem.module.scss';

type AdvertisementItemProps = {
    className?: string;
    advertisement: Advertisement;
}

export const AdvertisementItem = ({
    className,
    advertisement,
}: AdvertisementItemProps) => {
    const {
        imageUrl,
        name,
        likes,
        price,
        views,
        id,
    } = advertisement;

    return (
        <div className={classNames(cls.advertisement, {}, [className])}>
            <img className={cls.advertisement__image} src={imageUrl} alt={name} />
            <h2 className={cls.title}>{name}</h2>
            <p className={cls.price}>
                Стоимость: {formatNumber(price)} руб.
            </p>
            <ul className={cls.list}>
                <li className={cls.item}>
                    <Icon Svg={ViewsIcon} text={formatNumber(views)} />
                </li>
                <li className={cls.item}>
                    <Icon Svg={HeartIcon} text={formatNumber(likes)} />
                </li>
            </ul>
            <Link
                className={cls.button}
                to={RoutePath.advertisements_details + id}
            >
                Подробнее
            </Link>
        </div>
    );
};
