import { useEffect, useState } from 'react';

// Кнопка для теста ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    const onClick = () => setError(true);

    return (
        <button onClick={onClick}>
            Тригернуть ошибку
        </button>
    );
};
