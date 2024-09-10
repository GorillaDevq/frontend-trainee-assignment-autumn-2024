import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { ERROR_MESSAGE } from 'shared/const/common';
import { fetchAdvertisementById } from './fetchAdvertisementById';

const advertisement = {
    id: '1',
    name: 'Test Advertisement',
    description: 'This is a test advertisement',
    price: 1000,
    createdAt: '2023-09-10T10:00:00Z',
    views: 150,
    likes: 10,
    imageUrl: 'image.jpg',
};

describe('fetchAdvertisementById', () => {
    test('Успешное получение данных', async () => {
        const thunk = new TestAsyncThunk(fetchAdvertisementById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: advertisement }));
        const result = await thunk.callThunk('1');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(advertisement);
    });

    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchAdvertisementById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('22');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(ERROR_MESSAGE);
    });
});
