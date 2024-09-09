import { lazy } from 'react';

export const AdvertisementsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AdvertisementsPage')), 1500);
}));
