export const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleDateString('ru-RU');
};
