import { StateSchema } from 'app/providers/StoreProvider';

export const getFormIsLoading = (state: StateSchema) => state.form?.isLoading;
export const getFormError = (state: StateSchema) => state.form?.error;
