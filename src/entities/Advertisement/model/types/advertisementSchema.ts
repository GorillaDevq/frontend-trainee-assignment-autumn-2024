import { Advertisement } from './advertisement';

export type AdvertisementDetailsSchema = {
    isLoading: boolean,
    error: string | undefined,
    data: Advertisement | undefined,
}
