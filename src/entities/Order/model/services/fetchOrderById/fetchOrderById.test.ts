import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { ERROR_MESSAGE } from 'shared/const/common';
import { fetchOrderById } from './fetchOrderById';

const order = {
    id: '1',
    status: 0,
    createdAt: '2024-08-12T20:20:55.351Z',
    finishedAt: '',
    total: 314000,
    deliveryWay: 'mail',
    items: [
        {
            id: '8',
            name: 'Новый айфон',
            price: 100000,
            createdAt: '2024-08-12T12:16:55.351Z',
            views: 200000,
            likes: 302,
            imageUrl: '',
            count: 3,
        },
    ],
};

describe('fetchOrderById', () => {
    test('Успешное получение данных', async () => {
        const thunk = new TestAsyncThunk(fetchOrderById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: order }));
        const result = await thunk.callThunk('kjl');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(order);
    });

    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchOrderById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('jkl');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(ERROR_MESSAGE);
    });
});
