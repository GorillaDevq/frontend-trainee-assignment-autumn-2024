import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { MAX_LENGTH_DESCRIPTION } from 'entities/Advertisement/lib/config';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { advertisementDetailsActions } from '../../model/slice/advertisementDetailsSlice';
import { fetchAdvertisementById } from '../../model/services/fetchAdvertisementById/fetchAdvertisementById';
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
    const [isExpanded, setIsExpanded] = useState(false);

    const dispatch = useAppDispatch();

    const isLoading = useSelector(getAdvertisementDetailsIsLoading);
    const error = useSelector(getAdvertisementDetailsError);
    const advertisement = useSelector(getAdvertisementDetailsData);

    const toggleReadMore = () => setIsExpanded((prev) => !prev);

    useEffect(() => {
        dispatch(fetchAdvertisementById(id));

        return () => {
            dispatch(advertisementDetailsActions.resetState());
        };
    }, [dispatch, id]);

    const renderDescription = (description: string) => {
        if (description.length > MAX_LENGTH_DESCRIPTION) {
            if (isExpanded) {
                return description;
            }
            return (
                <>
                    {description.slice(0, MAX_LENGTH_DESCRIPTION)}...
                    <Button theme={ButtonTheme.SECONDARY} onClick={toggleReadMore}>
                        Читать далее
                    </Button>
                </>
            );
        }
        return description;
    };

    let content;

    if (isLoading) {
        content = (
            <div><Loader /></div>
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
                        {/* eslint-disable-next-line max-len */}
                        {advertisement?.description ? renderDescription(advertisement.description) : 'Описание отсутствует'}
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
