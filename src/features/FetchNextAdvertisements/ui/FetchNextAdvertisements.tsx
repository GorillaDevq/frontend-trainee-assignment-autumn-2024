import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './FetchNextAdvertisements.module.scss';

type FetchNextAdvertisementsProps = {
    className?: string;
    onClick: () => void;
    hasMore: boolean;
    isLoading?: boolean;
}

export const FetchNextAdvertisements = ({
    className,
    onClick,
    hasMore,
    isLoading,
}: FetchNextAdvertisementsProps) => {
    if (hasMore && !isLoading) {
        return (
            <Button
                disabled={isLoading}
                className={classNames(cls.button, {}, [className])}
                onClick={onClick}
            >
                Загрузить еще
            </Button>
        );
    }
    return null;
};
