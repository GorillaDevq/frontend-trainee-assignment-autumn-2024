import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { CreateAdvertisementModal } from 'features/CreateAdvertisement';
import { List } from 'shared/ui/List/List';

import { FetchNextAdvertisements } from 'features/FetchNextAdvertisements';
import {
    AdvertisementsPageFilters,
} from '../AdvertisementsPageFilters/AdvertisementsPageFilters';
import {
    fetchAdvertisementsList,
} from '../../model/services/fetchAdvertisementsList/fetchAdvertisementsList';
import cls from './AdvertisementsPage.module.scss';
import {
    getAdvertisementPageAmountToRender,
    getAdvertisementPageData,
    getAdvertisementPageEndNumberToRender,
} from '../../model/selectors/advertisementsPage';
import { renderAdvertisementsListItem } from '../../lib/renderAdvertisementsListItem';
import { advertisementsPageActions } from '../../model/slice/advertisementsPageSlice';

function AdvertisementsPage() {
    const dispatch = useAppDispatch();
    const advertisements = useSelector(getAdvertisementPageData);
    const amountToRender = useSelector(getAdvertisementPageAmountToRender);
    const endNumberToRender = useSelector(getAdvertisementPageEndNumberToRender);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const onLoadNextAdvertisements = () => {
        dispatch(advertisementsPageActions.setEndNumberToRender(endNumberToRender + amountToRender));
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
            <List
                itemsToRender={advertisements?.slice(0, endNumberToRender)}
                renderFunction={renderAdvertisementsListItem}
            />
            <FetchNextAdvertisements
                onClick={onLoadNextAdvertisements}
                hasMore={!(endNumberToRender > advertisements?.length)}
            />
            <CreateAdvertisementModal isOpen={isOpenModal} onClose={onCloseModal} />
        </section>
    );
}

export default AdvertisementsPage;
