import {
    configureStore, ReducersMapObject,
} from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { advertisementDetailsReducer } from 'entities/Advertisement';
import { advertisementToEditReducer } from 'features/EditAdvertisement';
import { advertisementsPageReducer } from 'pages/AdvertisementsPage';
import { advertisementToCreateReducer } from 'features/CreateAdvertisement';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export const createReduxStore = () => {
    const reducer: ReducersMapObject<StateSchema> = {
        advertisementDetails: advertisementDetailsReducer,
        advertisementToEdit: advertisementToEditReducer,
        advertisementToCreate: advertisementToCreateReducer,
        advertisementsPage: advertisementsPageReducer,
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
