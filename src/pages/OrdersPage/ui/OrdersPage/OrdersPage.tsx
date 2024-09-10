import { useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { List } from 'shared/ui/List/List';
import { useSelector } from 'react-redux';

import { fetchOrdersList } from '../../model/services/fetchOrdersList/fetchOrdersList';
import { getOrdersPageData } from '../../model/selectors/ordersPage';
import cls from './OrdersPage.module.scss';

function OrdersPage() {
    const dispatch = useAppDispatch();
    const orders = useSelector(getOrdersPageData);

    useEffect(() => {
        dispatch(fetchOrdersList({}));
    }, [dispatch]);

    return (
        <section />
    );
}

export default OrdersPage;
