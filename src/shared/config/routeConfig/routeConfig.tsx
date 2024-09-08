import { Navigate, RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { AdvertisementsPage } from 'pages/AdvertisementsPage';
import { OrdersPage } from 'pages/OrdersPage';
import { AdvertisementDetailsPage } from 'pages/AdvertisementDetailsPage';

export enum AppRoutes {
    DEFAULT = 'default',
    ADVERTISEMENTS = 'advertisements',
    ORDERS = 'orders',
    ADVERTISEMENTS_DETAILS = 'advertisements_details',
    // Last
    NOT_FOUND = 'notFoundPage',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.DEFAULT]: '/',
    [AppRoutes.ADVERTISEMENTS]: '/advertisements',
    [AppRoutes.ORDERS]: '/orders',
    [AppRoutes.ADVERTISEMENTS_DETAILS]: '/advertisements/', // + :id
    // Last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.DEFAULT]: {
        path: RoutePath.default,
        element: <Navigate to={RoutePath.advertisements} />,
    },
    [AppRoutes.ADVERTISEMENTS]: {
        path: RoutePath.advertisements,
        element: <AdvertisementsPage />,
    },
    [AppRoutes.ORDERS]: {
        path: RoutePath.orders,
        element: <OrdersPage />,
    },
    [AppRoutes.ADVERTISEMENTS_DETAILS]: {
        path: `${RoutePath.advertisements_details}:id`,
        element: <AdvertisementDetailsPage />,
    },
    // Last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.notFoundPage,
        element: <NotFoundPage />,
    },
};
