import { StateSchema } from 'app/providers/StoreProvider';
import {
    getAdvertisementDetailsData,
    getAdvertisementDetailsIsLoading,
    getAdvertisementDetailsError,
} from './advertisementDetails';

describe('advertisementDetails', () => {
    const state: Partial<StateSchema> = {
        advertisementDetails: {
            data: {
                id: '1',
                name: 'Test Advertisement',
                description: 'This is a test advertisement',
                price: 1000,
                createdAt: '2023-09-10T10:00:00Z',
                views: 150,
                likes: 10,
                imageUrl: 'image.jpg',
            },
            isLoading: false,
            error: undefined,
        },
    };

    describe('getAdvertisementDetailsData', () => {
        it('Должно вернуть всю дату в схеме', () => {
            const result = getAdvertisementDetailsData(state as StateSchema);
            expect(result).toEqual(state.advertisementDetails?.data);
        });
    });

    describe('getAdvertisementDetailsIsLoading', () => {
        it('Должно вернуть из стора false', () => {
            const result = getAdvertisementDetailsIsLoading(state as StateSchema);
            expect(result).toBe(false);
        });
    });

    describe('getAdvertisementDetailsError', () => {
        it('Должно вернуть из стора undefined', () => {
            const result = getAdvertisementDetailsError(state as StateSchema);
            expect(result).toBeUndefined();
        });

        it('Должен вернуть строку ошибки из стора', () => {
            const errorState: Partial<StateSchema> = {
                advertisementDetails: {
                    ...state.advertisementDetails!,
                    error: 'String',
                },
            };
            const result = getAdvertisementDetailsError(errorState as StateSchema);
            expect(result).toBe('String');
        });
    });
});
