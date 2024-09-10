import { formatNumber } from './formatNumber';

describe('formatNumber', () => {
    it('Должно вернуть не форматированную строку', () => {
        const result = formatNumber(123);
        expect(result).toBe('123');
    });

    it('Должно отформатировать тысячу', () => {
        const result = formatNumber(1000);
        expect(result).toBe('1\u00A0тыс.');
    });

    it('Должно отформатировать миллион', () => {
        const result = formatNumber(1000000);
        expect(result).toBe('1\u00A0млн');
    });
});
