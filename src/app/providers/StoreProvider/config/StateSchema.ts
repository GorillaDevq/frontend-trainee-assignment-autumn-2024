import { AxiosInstance } from 'axios';
import { AppDispatch } from 'app/providers/StoreProvider';
import { AdvertisementSchema } from 'entities/Advertisement';

export interface StateSchema {
    advertisement: AdvertisementSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    dispatch: AppDispatch;
    state: StateSchema;
}
