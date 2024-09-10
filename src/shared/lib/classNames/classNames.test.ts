import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('Функция с тремя парамметрами все положительные', () => {
        const received = classNames('App', { collapsed: true, hidden: false }, ['opened']);
        const expected = 'App opened collapsed';
        expect(received).toBe(expected);
    });

    test('Функция с тремя парамметрами, моды undefined', () => {
        const received = classNames('App', { collapsed: undefined, hidden: undefined }, ['opened']);
        const expected = 'App opened ';
        expect(received).toBe(expected);
    });
});
