import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { List } from 'shared/ui/List/List';
import { useSelector } from 'react-redux';
import { SortOrdersPanel } from 'features/SortOrders';
import { deleteOrderById, Order, OrderSkeleton } from 'entities/Order';
import { useDebounce } from 'shared/hooks/useDebounce';
import { OrderDetailsModal } from 'widjets/OrderDetailsModal';
import { useAbortControllerManager } from 'shared/hooks/useAbortControllerManager';
import { PagePagination } from 'widjets/PagePagination';

import { fetchOrderDetails } from '../../model/services/fetchOrderDetails/fetchOrderDetails';
import { ordersPageActions } from '../../model/slice/ordersPageSlice';
import { fetchOrdersList } from '../../model/services/fetchOrdersList/fetchOrdersList';
import {
    getOrderItemsPage,
    getOrdersPageData,
    getOrdersPageError,
    getOrdersPageIsLoading,
    getOrdersPageLimit,
    getOrdersPageNum,
    getOrdersPageOrder,
    getOrdersPageSort,
    getOrdersPageStatus,
    getOrdersPageTotalData,
} from '../../model/selectors/ordersPage';
import cls from './OrdersPage.module.scss';

function OrdersPage() {
    const dispatch = useAppDispatch();

    const error = useSelector(getOrdersPageError);
    const isLoading = useSelector(getOrdersPageIsLoading);
    const orders = useSelector(getOrdersPageData);
    const orderItems = useSelector(getOrderItemsPage);
    const sort = useSelector(getOrdersPageSort);
    const order = useSelector(getOrdersPageOrder);
    const limit = useSelector(getOrdersPageLimit);
    const page = useSelector(getOrdersPageNum);
    const totalData = useSelector(getOrdersPageTotalData);
    const status = useSelector(getOrdersPageStatus);

    const [isOpenModal, setIsOpenModal] = useState(false);

    const [controllersRef, abortAllRequests] = useAbortControllerManager();

    const fetchOrdersData = useCallback(async (replace?: boolean) => {
        const controller = new AbortController();
        controllersRef.current.push(controller);
        await dispatch(fetchOrdersList({ signal: controller.signal, replace }));
        controllersRef.current = controllersRef.current.filter((controllerItem) => controller !== controllerItem);
    }, [controllersRef, dispatch]);

    const fetchData = () => {
        fetchOrdersData(true);
    };

    const deleteOrderHandler = (id: string) => {
        dispatch(deleteOrderById(id));
    };

    const debouncedFetchOrders = useDebounce(fetchData, 500);
    const debouncedDeleteOrders = useDebounce(deleteOrderHandler, 500);

    const onOpenModal = async (id: string) => {
        await dispatch(fetchOrderDetails(id));
        setIsOpenModal(true);
    };

    const onCloseModal = () => {
        setIsOpenModal(false);
    };

    const onClickPagination = (page: number) => {
        dispatch(ordersPageActions.setPage(page));
        fetchOrdersData();
    };

    const onChangeSort = (newSort: string) => {
        dispatch(ordersPageActions.setSort(newSort));
        debouncedFetchOrders();
    };

    const onChangeOrder = (newSort: string) => {
        dispatch(ordersPageActions.setOrder(newSort));
        debouncedFetchOrders();
    };

    const onClickStatus = (newStatus: number) => {
        dispatch(ordersPageActions.setStatus(newStatus));
        debouncedFetchOrders();
    };

    useEffect(() => {
        fetchOrdersData();

        return () => {
            abortAllRequests();
            dispatch(ordersPageActions.clearState());
        };
    }, [abortAllRequests, dispatch, fetchOrdersData]);

    return (
        <section>
            <SortOrdersPanel
                sort={sort}
                order={order}
                status={status}
                onChangeOrder={onChangeOrder}
                onChangeSort={onChangeSort}
                onClickStatus={onClickStatus}
            />
            <PagePagination
                totalData={totalData}
                amount={limit}
                page={page}
                onClick={onClickPagination}
            />
            <List<Order>
                itemsToRender={orders}
                renderFunction={(order) => (
                    <li key={order.id}>
                        <Order
                            order={order}
                            onDeleteOrder={debouncedDeleteOrders}
                            onOpenModal={onOpenModal}
                        />
                    </li>
                )}
                isLoading={isLoading}
                error={error}
                Skeleton={OrderSkeleton}
                className={cls.page__list}
            />
            {isOpenModal && (
                <OrderDetailsModal
                    isOpen={isOpenModal}
                    onClose={onCloseModal}
                    orderItems={orderItems}
                />
            )}
        </section>
    );
}

export default OrdersPage;
