import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';

export const AppRouter = () => (
    <Suspense fallback={<Loader />}>
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => (
                <Route
                    path={path}
                    element={element}
                    key={path}
                />
            ))}
        </Routes>
    </Suspense>

);
