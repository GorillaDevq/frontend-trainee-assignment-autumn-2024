import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { createAdvertisementByid } from 'features/CreateAdvertisement';
import { List } from 'shared/ui/List/List';
import { FetchNextAdvertisements } from 'features/FetchNextAdvertisements';
import { advertisementsPageActions } from 'pages/AdvertisementsPage';
import { FormDataType } from 'widjets/AdvertisementModal/ui/AdvertisementForm/AdvertisementForm';
import { AdvertisementModal } from 'widjets/AdvertisementModal';
import { AdvertisementItemSkeleton } from 'entities/Advertisement';

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
    getAdvertisementPageIsLoading,
} from '../../model/selectors/advertisementsPage';
import { renderAdvertisementsListItem } from '../../lib/renderAdvertisementsListItem';

function AdvertisementsPage() {
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getAdvertisementPageIsLoading);
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

    const onOpenModal = () => {
        setIsOpenModal(true);
    };

    const onCloseModal = () => {
        setIsOpenModal(false);
    };

    const onSubmitForm = async (data: FormDataType) => {
        const response = await dispatch(createAdvertisementByid(data));
        if (response.meta.requestStatus === 'fulfilled') onCloseModal();
    };

    useEffect(() => {
        dispatch(fetchAdvertisementsList({}));
        return () => {
            dispatch(advertisementsPageActions.clearState());
        };
    }, [dispatch]);

    return (
        <section className={classNames(cls.page)}>
            <AdvertisementsPageFilters onOpen={onOpenModal} />
            <List<Advertisement>
                className={cls.list}
                itemsToRender={advertisements}
                renderFunction={renderAdvertisementsListItem}
                isLoading={isLoading}
                Skeleton={AdvertisementItemSkeleton}
            />
            <FetchNextAdvertisements
                onClick={onLoadNextAdvertisements}
                hasMore={hasMore}
                disabled={isLoading}
            />
            <AdvertisementModal
                onSubmit={onSubmitForm}
                isOpen={isOpenModal}
                onClose={onCloseModal}
                mode="create"
            />
        </section>
    );
}

export default AdvertisementsPage;
