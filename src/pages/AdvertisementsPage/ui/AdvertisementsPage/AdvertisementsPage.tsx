import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { CreateAdvertisementModal } from 'features/CreateAdvertisement';
import { ListWithInfinityScroll } from 'shared/ui/ListWithInfinityScroll/ListWithInfinityScroll';

import {
    fetchNextAdvertisementsPage,
} from '../../model/services/fetchNextAdvertisementsPage/fetchNextAdvertisementsPage';
import {
    AdvertisementsPageFilters,
} from '../AdvertisementsPageFilters/AdvertisementsPageFilters';
import {
    fetchAdvertisementsList,
} from '../../model/services/fetchAdvertisementsList/fetchAdvertisementsList';
import cls from './AdvertisementsPage.module.scss';
import { getAdvertisementPageData } from '../../model/selectors/advertisementsPage';
import { renderAdvertisementsListItem } from '../../lib/renderAdvertisementsListItem';

function AdvertisementsPage() {
    const dispatch = useAppDispatch();
    const advertisements = useSelector(getAdvertisementPageData);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const onLoadNextAdvertisements = () => {
        dispatch(fetchNextAdvertisementsPage());
    };

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
            <ListWithInfinityScroll
                onScrollEnd={onLoadNextAdvertisements}
                itemsToRender={advertisements}
                renderFunction={renderAdvertisementsListItem}
            />
            <CreateAdvertisementModal isOpen={isOpenModal} onClose={onCloseModal} />
        </section>
    );
}

export default AdvertisementsPage;
