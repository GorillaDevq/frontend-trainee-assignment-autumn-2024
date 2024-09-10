import { AxiosInstance } from 'axios';
import { AppDispatch } from 'app/providers/StoreProvider';
import { AdvertisementDetailsSchema } from 'entities/Advertisement';
import { AdvertisementPageSchema } from 'pages/AdvertisementsPage';
import { FormSchema } from 'entities/Form';
import { OrdersPageSchema } from 'pages/OrdersPage';
import { OrderDetailsSchema } from 'entities/Order';

export type StateSchema = {
    advertisementDetails: AdvertisementDetailsSchema;
    advertisementsPage: AdvertisementPageSchema;
    orderDetails: OrderDetailsSchema;
    ordersPage: OrdersPageSchema;
    form: FormSchema;
}

export type ThunkExtraArg = {
    api: AxiosInstance;
}

export type ThunkConfig<T> = {
    rejectValue: T;
    extra: ThunkExtraArg;
    dispatch: AppDispatch;
    state: StateSchema;
}
