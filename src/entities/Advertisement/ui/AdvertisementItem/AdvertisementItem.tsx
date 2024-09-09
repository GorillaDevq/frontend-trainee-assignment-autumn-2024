import { classNames } from 'shared/lib/classNames/classNames';
import HeartIcon from 'shared/assets/icons/heart.svg';
import ViewsIcon from 'shared/assets/icons/views.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button } from 'shared/ui/Button/Button';
import { formatNumber } from 'shared/lib/formatNumber/formatNumber';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './AdvertisementItem.module.scss';
import { Advertisement } from '../../model/types/advertisement';

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

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(RoutePath.advertisements_details + id);
    };

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
            <Button
                className={cls.button}
                type="button"
                onClick={onClickHandler}
            >
                Подробнее
            </Button>
        </div>
    );
};
