import { formatDate } from './formatDate';

describe('formatDate', () => {
    it('должно вернуть дату в ISO формате', () => {
        const isoString = '2024-08-12T20:20:55.351Z';
        const result = formatDate(isoString);
        expect(result).toBe('12.08.2024');
    });

    it('Неверная строка для форматирования', () => {
        const isoString = 'invalid-date';
        const result = formatDate(isoString);
        expect(result).toBe('Invalid Date');
    });
});
