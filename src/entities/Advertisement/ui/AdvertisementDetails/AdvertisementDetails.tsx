import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';

import { advertisementDetailsActions } from 'entities/Advertisement';
import {
    fetchAdvertisementById,
} from '../../model/services/fetchAdvertisementById/fetchAdvertisementById';
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
        return () => {
            dispatch(advertisementDetailsActions.resetState());
        };
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
                    <p className={cls.advertisement__price}>
                        Стоимость: {advertisement?.price} руб.
                    </p>
                </div>
                <div className={cls.advertisement__description}>
                    <img
                        className={cls.advertisement__image}
                        src={advertisement?.imageUrl}
                        alt={advertisement?.name}
                    />
                    <div className={cls.advertisement__about}>
                        <h3 className={cls.advertisement__aboutTitle}>Описание</h3>
                        {advertisement?.description}
                    </div>
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
