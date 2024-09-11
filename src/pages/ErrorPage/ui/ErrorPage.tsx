import { Button } from 'shared/ui/Button/Button';

export const ErrorPage = () => {
    const onReload = () => window.location.reload();

    return (
        <div>
            <Button onClick={onReload}>Перезагрузить страницу</Button>
            Ошибка перезагрузите страницу
        </div>
    );
};
