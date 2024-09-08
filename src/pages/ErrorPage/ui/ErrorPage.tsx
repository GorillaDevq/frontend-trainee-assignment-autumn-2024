export const ErrorPage = () => {
    const onReload = () => window.location.reload();

    return (
        <div>
            <button onClick={onReload}>Перезагрузить страницу</button>
            Ошибка перезагрузите страницу
        </div>
    );
};
