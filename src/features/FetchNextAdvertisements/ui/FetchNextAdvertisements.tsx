import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './FetchNextAdvertisements.module.scss';

type FetchNextAdvertisementsProps = {
    className?: string;
    onClick: () => void;
    hasMore: boolean;
}

export const FetchNextAdvertisements = ({
    className,
    onClick,
    hasMore,
}: FetchNextAdvertisementsProps) => {
    if (hasMore) {
        return (
            <Button
                className={classNames(cls.button, {}, [className])}
                onClick={onClick}
            >
                Загрузить еще
            </Button>
        );
    }
    return null;
};
