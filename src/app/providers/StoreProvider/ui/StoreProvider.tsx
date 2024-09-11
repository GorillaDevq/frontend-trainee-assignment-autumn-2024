import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';
import { PropsWithChildren } from 'shared/types/common';

type StoreProviderProps = PropsWithChildren

export const StoreProvider = ({ children }: StoreProviderProps) => {
    const store = createReduxStore();

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
