import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { ERROR_MESSAGE } from 'shared/const/common';
import { deleteOrderById } from './deleteOrderById';

describe('fetchAdvertisementById', () => {
    test('Успешное получение данных', async () => {
        const thunk = new TestAsyncThunk(deleteOrderById);
        thunk.api.delete.mockReturnValue(Promise.resolve({ data: 'sad' }));
        const result = await thunk.callThunk('kjl');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.delete).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual('kjl');
    });

    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(deleteOrderById);
        thunk.api.delete.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('jkl');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.delete).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(ERROR_MESSAGE);
    });
});
