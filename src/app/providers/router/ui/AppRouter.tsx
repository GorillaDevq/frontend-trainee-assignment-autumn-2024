import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Suspense } from 'react';

export const AppRouter = () => (
    <Suspense fallback={<div>LOADING...</div>}>
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
