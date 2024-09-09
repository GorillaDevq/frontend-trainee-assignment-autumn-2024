import { StateSchema } from 'app/providers/StoreProvider';

export const getAdvertisementDetailsData = (state: StateSchema) => state.advertisementDetails?.data;
export const getAdvertisementDetailsIsLoading = (state: StateSchema) => state.advertisementDetails?.isLoading;
export const getAdvertisementDetailsError = (state: StateSchema) => state.advertisementDetails?.error;
