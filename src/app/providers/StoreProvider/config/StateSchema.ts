import { AxiosInstance } from 'axios';
import { AppDispatch } from 'app/providers/StoreProvider';
import { AdvertisementDetailsSchema } from 'entities/Advertisement';
import { EditAdvertisementSchema } from 'features/EditAdvertisement/model/types/editAdvertisementSchema';
import { AdvertisementPageSchema } from 'pages/AdvertisementsPage';

export type StateSchema = {
    advertisementDetails: AdvertisementDetailsSchema;
    advertisementToEdit: EditAdvertisementSchema;
    advertisementsPage: AdvertisementPageSchema;
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
