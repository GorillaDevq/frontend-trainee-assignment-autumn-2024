import { useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { List } from 'shared/ui/List/List';
import { useSelector } from 'react-redux';
import { SortOrdersPanel } from 'features/SortOrders';
import { Order } from 'entities/Order';

import { useDebounce } from 'shared/hooks/useDebounce';
import { OrderDetailsModal } from 'widjets/OrderDetailsModal/ui/OrderDetailsModal';
import { fetchOrderDetails } from 'pages/OrdersPage/model/services/fetchOrderDetails/fetchOrderDetails';
import { AdvertisementItemSkeleton } from 'entities/Advertisement';
import { ordersPageActions } from '../../model/slice/ordersPageSlice';
import { fetchOrdersList } from '../../model/services/fetchOrdersList/fetchOrdersList';
import {
    getOrderItemsPage,
    getOrdersPageData, getOrdersPageIsLoading,
    getOrdersPageOrder,
    getOrdersPageSort,
} from '../../model/selectors/ordersPage';

function OrdersPage() {
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getOrdersPageIsLoading);
    const orders = useSelector(getOrdersPageData);
    const orderItems = useSelector(getOrderItemsPage);
    const sort = useSelector(getOrdersPageSort);
    const order = useSelector(getOrdersPageOrder);

    const [isOpenModal, setIsOpenModal] = useState(false);

    const fetchOrdersData = () => {
        dispatch(fetchOrdersList({ replace: true }));
    };

    const debouncedFetchOrders = useDebounce(fetchOrdersData, 500);

    const onOpenModal = async (id: string) => {
        await dispatch(fetchOrderDetails(id));
        setIsOpenModal(true);
    };

    const onCloseModal = () => {
        setIsOpenModal(false);
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
        dispatch(fetchOrdersList({}));
        return () => {
            dispatch(ordersPageActions.clearState());
        };
    }, [dispatch]);

    return (
        <section>
            <SortOrdersPanel
                sort={sort}
                order={order}
                onChangeOrder={onChangeOrder}
                onChangeSort={onChangeSort}
                onClickStatus={onClickStatus}
            />
            <List<Order>
                itemsToRender={orders}
                renderFunction={(order) => (
                    <li key={order.id}>
                        <Order order={order} onClick={onOpenModal} />
                    </li>
                )}
                isLoading={isLoading}
                Skeleton={AdvertisementItemSkeleton}
            />
            <OrderDetailsModal
                isOpen={isOpenModal}
                onClose={onCloseModal}
                orderItems={orderItems}
            />
        </section>
    );
}

export default OrdersPage;
