import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { createReduxStore } from 'app/providers/StoreProvider';

interface StoreProviderProps {
    children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
    const store = createReduxStore();

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
