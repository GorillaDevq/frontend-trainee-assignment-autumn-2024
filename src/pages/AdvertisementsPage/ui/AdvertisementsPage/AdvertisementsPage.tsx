import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { CreateAdvertisementModal } from 'features/CreateAdvertisement';
import { List } from 'shared/ui/List/List';

import { FetchNextAdvertisements } from 'features/FetchNextAdvertisements';
import { advertisementsPageActions } from 'pages/AdvertisementsPage';
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
import {
    getAdvertisementPageAmountToRender,
    getAdvertisementPageData,
    getAdvertisementPageEndNumberToRender,
    getAdvertisementPageHasMore,
} from '../../model/selectors/advertisementsPage';
import { renderAdvertisementsListItem } from '../../lib/renderAdvertisementsListItem';

function AdvertisementsPage() {
    const dispatch = useAppDispatch();

    const advertisements = useSelector(getAdvertisementPageData);
    const amount = useSelector(getAdvertisementPageAmountToRender);
    const endNumber = useSelector(getAdvertisementPageEndNumberToRender);
    const hasMore = useSelector(getAdvertisementPageHasMore);

    const [isOpenModal, setIsOpenModal] = useState(false);

    const onLoadNextAdvertisements = () => {
        dispatch(advertisementsPageActions.setStartNumberToRender(endNumber));
        dispatch(advertisementsPageActions.setEndNumberToRender(endNumber + amount));
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
            <List
                itemsToRender={advertisements}
                renderFunction={renderAdvertisementsListItem}
            />
            <FetchNextAdvertisements
                onClick={onLoadNextAdvertisements}
                hasMore={hasMore}
            />
            <CreateAdvertisementModal isOpen={isOpenModal} onClose={onCloseModal} />
        </section>
    );
}

export default AdvertisementsPage;
