import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';

import {
    fetchAdvertisementById,
} from '../../model/services/fetchAdvertisementByid/fetchAdvertisementByid';
import {
    getAdvertisementDetailsData,
    getAdvertisementDetailsError,
    getAdvertisementDetailsIsLoading,
} from '../../model/selectors/advertisementDetails';

import cls from './AdvertisementDetails.module.scss';

type AdvertisementDetailsProps = {
    className?: string;
    id: string;
}

export const AdvertisementDetails = ({
    className,
    id,
}: AdvertisementDetailsProps) => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getAdvertisementDetailsIsLoading);
    const error = useSelector(getAdvertisementDetailsError);
    const advertisement = useSelector(getAdvertisementDetailsData);

    useEffect(() => {
        dispatch(fetchAdvertisementById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div>LOADING Объявление</div>
        );
    } else if (error) {
        content = (
            <div>{error}</div>
        );
    } else {
        content = (
            <article className={cls.advertisement__container}>
                <div className={cls.advertisement__information}>
                    <h2 className={cls.advertisement__title}>{advertisement?.name}</h2>
                    <p className={cls.advertisement__price}>{advertisement?.price}</p>
                </div>
                <div className={cls.advertisement__description}>
                    <img
                        className={cls.advertisement__image}
                        src={advertisement?.imageUrl}
                        alt={advertisement?.name}
                    />
                    <p className={cls.advertisement__about}>
                        <h3>Описание</h3>
                        {advertisement?.description}
                    </p>
                </div>
            </article>
        );
    }

    return (
        <div className={classNames(cls.advertisement, {}, [className])}>
            {content}
        </div>
    );
};
