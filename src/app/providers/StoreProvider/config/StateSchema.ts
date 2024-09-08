import { AxiosInstance } from 'axios';
import { AppDispatch } from 'app/providers/StoreProvider';
import { AdvertisementSchema } from 'entities/Advertisement';

export type StateSchema = {
    advertisement: AdvertisementSchema
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
