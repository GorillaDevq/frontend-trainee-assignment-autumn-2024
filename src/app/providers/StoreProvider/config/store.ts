import {
    configureStore,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { advertisementDetailsReducer } from 'entities/Advertisement';
import { advertisementsPageReducer } from 'pages/AdvertisementsPage';
import { formReducer } from 'entities/Form';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export const createReduxStore = () => {
    const reducer: ReducersMapObject<StateSchema> = {
        advertisementDetails: advertisementDetailsReducer,
        advertisementsPage: advertisementsPageReducer,
        form: formReducer,
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
