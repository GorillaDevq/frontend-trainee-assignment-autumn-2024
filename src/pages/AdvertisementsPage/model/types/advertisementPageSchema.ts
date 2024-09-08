import { EntityState } from '@reduxjs/toolkit';
import { Advertisement } from 'entities/Advertisement';

export type AdvertisementPageSchema = {
    isLoading: boolean;
    error?: string;
} & EntityState<Advertisement>
