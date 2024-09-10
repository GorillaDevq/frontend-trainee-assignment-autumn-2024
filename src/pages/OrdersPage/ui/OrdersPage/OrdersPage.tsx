import { useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { List } from 'shared/ui/List/List';
import { useSelector } from 'react-redux';
import { SortOrdersPanel } from 'features/SortOrders';
import { OrderItem } from 'entities/Order';

import { useDebounce } from 'shared/hooks/useDebounce';
import { ordersPageActions } from '../../model/slice/ordersPageSlice';
import { fetchOrdersList } from '../../model/services/fetchOrdersList/fetchOrdersList';
import {
    getOrdersPageData,
    getOrdersPageOrder,
    getOrdersPageSort,
} from '../../model/selectors/ordersPage';

function OrdersPage() {
    const dispatch = useAppDispatch();
    const orders = useSelector(getOrdersPageData);
    const sort = useSelector(getOrdersPageSort);
    const order = useSelector(getOrdersPageOrder);

    const fetchData = () => {
        dispatch(fetchOrdersList({ replace: true }));
    };

    const debouncedFetchData = useDebounce(fetchData, 500);

    useEffect(() => {
        dispatch(fetchOrdersList({}));
        return () => {
            dispatch(ordersPageActions.clearState());
        };
    }, [dispatch]);

    const onChangeSort = (newSort: string) => {
        dispatch(ordersPageActions.setSort(newSort));
        debouncedFetchData();
    };

    const onChangeOrder = (newSort: string) => {
        dispatch(ordersPageActions.setOrder(newSort));
        debouncedFetchData();
    };

    const onClickStatus = (newStatus: number) => {
        dispatch(ordersPageActions.setStatus(newStatus));
        debouncedFetchData();
    };

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
                        <OrderItem order={order} />
                    </li>
                )}
            />
        </section>
    );
}

export default OrdersPage;
