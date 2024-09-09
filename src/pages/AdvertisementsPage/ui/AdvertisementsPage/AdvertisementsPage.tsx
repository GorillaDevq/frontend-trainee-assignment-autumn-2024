import { AdvertisementItem } from 'entities/Advertisement';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    CreateAdvertisementModal,
} from 'features/CreateAdvertisement/ui/CreateAdvertisementModal/CreateAdvertisementModal';
import {
    AdvertisementsPageFilters,
} from '../AdvertisementsPageFilters/AdvertisementsPageFilters';
import {
    fetchAdvertisementsList,
} from '../../model/services/fetchAdvertisementsList/fetchAdvertisementsList';
import cls from './AdvertisementsPage.module.scss';
import { getAdvertisementPageData } from '../../model/selectors/advertisementsPage';

function AdvertisementsPage() {
    const dispatch = useAppDispatch();
    const advertisements = useSelector(getAdvertisementPageData);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const onOpenModal = useCallback(() => {
        setIsOpenModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsOpenModal(false);
    }, []);

    useEffect(() => {
        dispatch(fetchAdvertisementsList({}));
    }, [dispatch]);

    return (
        <section className={classNames(cls.page)}>
            <AdvertisementsPageFilters onOpen={onOpenModal} />
            {!!advertisements.length && advertisements.map((item) => (
                <AdvertisementItem advertisement={item} key={item.id} />
            ))}
            <CreateAdvertisementModal isOpen={isOpenModal} onClose={onCloseModal} />
        </section>
    );
}

export default AdvertisementsPage;
