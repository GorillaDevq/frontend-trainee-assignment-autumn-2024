export const formatNumber = (num: number) => new Intl.NumberFormat('ru-RU', {
    notation: 'compact',
    compactDisplay: 'short',
}).format(num);
