import { StateSchema } from 'app/providers/StoreProvider';

export const getOrderDetailsData = (state: StateSchema) => state.advertisementDetails?.data;
export const getOrderIsLoading = (state: StateSchema) => state.advertisementDetails?.isLoading;
export const getOrderError = (state: StateSchema) => state.advertisementDetails?.error;
