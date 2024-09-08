import { Advertisement } from './advertisement';

export type AdvertisementSchema = {
    isLoading: boolean,
    error: string | undefined,
    data: Advertisement | undefined,
}
