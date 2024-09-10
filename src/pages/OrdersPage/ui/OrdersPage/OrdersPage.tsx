import { useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { List } from 'shared/ui/List/List';
import { useSelector } from 'react-redux';

import { OrderItem } from 'entities/Order';
import { ordersPageActions } from '../../model/slice/ordersPageSlice';
import { fetchOrdersList } from '../../model/services/fetchOrdersList/fetchOrdersList';
import { getOrdersPageData } from '../../model/selectors/ordersPage';
import cls from './OrdersPage.module.scss';

function OrdersPage() {
    const dispatch = useAppDispatch();
    const orders = useSelector(getOrdersPageData);

    useEffect(() => {
        dispatch(fetchOrdersList({}));
        return () => {
            dispatch(ordersPageActions.clearState());
        };
    }, [dispatch]);

    return (
        <section>
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
