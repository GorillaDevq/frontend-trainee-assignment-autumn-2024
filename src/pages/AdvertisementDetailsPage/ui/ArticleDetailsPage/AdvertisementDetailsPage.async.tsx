import { lazy } from 'react';

export const AdvertisementDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AdvertisementDetailsPage')), 1500);
}));
