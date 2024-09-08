import {
    configureStore,
} from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { advertisementDetailsReducer } from 'entities/Advertisement';
import { advertisementToEditReducer } from 'features/EditAdvertisement';
import { ThunkExtraArg } from './StateSchema';

export const createReduxStore = () => {
    const reducer = {
        advertisementDetails: advertisementDetailsReducer,
        advertisementToEdit: advertisementToEditReducer,
    };

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer,
        devTools: __IS_DEV__,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export type RootState = ReturnType<typeof createReduxStore>['getState'];
