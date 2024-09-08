import { Advertisement } from './advertisement';

export interface AdvertisementSchema {
    isLoading: boolean,
    error: string | undefined,
    data: Advertisement | undefined,
}
