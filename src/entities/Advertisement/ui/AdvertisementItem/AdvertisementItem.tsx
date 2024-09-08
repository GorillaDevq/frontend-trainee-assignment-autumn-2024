import { classNames } from 'shared/lib/classNames/classNames';
import HeartIcon from 'shared/assets/icons/heart.svg';
import ViewsIcon from 'shared/assets/icons/views.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './AdvertisementItem.module.scss';
import { Advertisement } from '../../model/types/advertisement';

type AdvertisementItemProps = {
    className?: string;
    advertisement: Advertisement;
}

export const AdvertisementItem = ({ className, advertisement }: AdvertisementItemProps) => {
    const {
        imageUrl,
        name,
        likes,
        price,
        views,
    } = advertisement;

    return (
        <div className={classNames(cls.advertisement, {}, [className])}>
            <img className={cls.advertisement__image} src={imageUrl} alt={name} />
            <h2>{name}</h2>
            <p>{price}</p>
            <ul>
                <li>
                    <Icon Svg={ViewsIcon} text={views.toString()} />
                </li>
                <li>
                    <Icon Svg={HeartIcon} text={likes.toString()} />
                </li>
            </ul>
        </div>
    );
};
