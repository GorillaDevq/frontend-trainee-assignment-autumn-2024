import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    useCallback, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { createAdvertisementByid } from 'features/CreateAdvertisement';
import { List } from 'shared/ui/List/List';
import { FormDataType, AdvertisementModal } from 'widjets/AdvertisementModal';
import { AdvertisementItemSkeleton } from 'entities/Advertisement';
import { useAbortControllerManager } from 'shared/hooks/useAbortControllerManager';

import { advertisementsPageActions } from '../../model/slice/advertisementsPageSlice';
import { PagePagination } from '../../../../widjets/PagePagination';
import {
    AdvertisementsPageFilters,
} from '../AdvertisementsPageFilters/AdvertisementsPageFilters';
import {
    fetchAdvertisementsList,
} from '../../model/services/fetchAdvertisementsList/fetchAdvertisementsList';
import cls from './AdvertisementsPage.module.scss';
import {
    getAdvertisementPageData,
    getAdvertisementPageError,
    getAdvertisementPageIsLoading,
    getAdvertisementPageLimit,
    getAdvertisementPageNum,
    getAdvertisementPageTotal,
} from '../../model/selectors/advertisementsPage';
import { renderAdvertisementsListItem } from '../../lib/renderAdvertisementsListItem';

function AdvertisementsPage() {
    const dispatch = useAppDispatch();

    const error = useSelector(getAdvertisementPageError);
    const isLoading = useSelector(getAdvertisementPageIsLoading);
    const advertisements = useSelector(getAdvertisementPageData);
    const limit = useSelector(getAdvertisementPageLimit);
    const totalData = useSelector(getAdvertisementPageTotal);
    const page = useSelector(getAdvertisementPageNum);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const [controllersRef, abortAllRequests] = useAbortControllerManager();

    const fetchAdvertisementsData = useCallback(async (replace?: boolean) => {
        const controller = new AbortController();
        controllersRef.current.push(controller);

        await dispatch(fetchAdvertisementsList({ signal: controller.signal, replace }));

        controllersRef.current = controllersRef.current.filter((controllerItem) => controller !== controllerItem);
    }, [controllersRef, dispatch]);

    const onOpenModal = () => {
        setIsOpenModal(true);
    };

    const onCloseModal = () => {
        setIsOpenModal(false);
    };

    const onClickPagination = (page: number) => {
        dispatch(advertisementsPageActions.setPage(page));
        fetchAdvertisementsData();
    };

    const onSubmitForm = async (data: FormDataType) => {
        const response = await dispatch(createAdvertisementByid(data));
        if (response.meta.requestStatus === 'fulfilled') onCloseModal();
    };

    useEffect(() => {
        fetchAdvertisementsData();

        return () => {
            abortAllRequests();
            dispatch(advertisementsPageActions.clearState());
        };
    }, [abortAllRequests, dispatch, fetchAdvertisementsData]);

    return (
        <section className={classNames(cls.page)}>
            <AdvertisementsPageFilters onOpen={onOpenModal} fetchData={fetchAdvertisementsData} />
            <PagePagination
                page={page}
                totalData={totalData}
                amount={limit}
                onClick={onClickPagination}
            />
            <List<Advertisement>
                className={cls.list}
                itemsToRender={advertisements}
                renderFunction={renderAdvertisementsListItem}
                isLoading={isLoading}
                Skeleton={AdvertisementItemSkeleton}
                error={error}
            />
            {isOpenModal && (
                <AdvertisementModal
                    onSubmit={onSubmitForm}
                    isOpen={isOpenModal}
                    onClose={onCloseModal}
                    mode="create"
                />
            )}
        </section>
    );
}

export default AdvertisementsPage;
