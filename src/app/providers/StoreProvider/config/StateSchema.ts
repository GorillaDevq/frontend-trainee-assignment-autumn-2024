import { AxiosInstance } from 'axios';
import { AppDispatch } from 'app/providers/StoreProvider';
import { AdvertisementDetailsSchema } from 'entities/Advertisement';

export type StateSchema = {
    advertisementDetails: AdvertisementDetailsSchema
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
