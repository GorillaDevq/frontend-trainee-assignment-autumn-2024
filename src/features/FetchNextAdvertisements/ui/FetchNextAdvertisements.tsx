import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './FetchNextAdvertisements.module.scss';

type FetchNextAdvertisementsProps = {
    className?: string;
    onClick: () => void;
    hasMore: boolean;
    disabled?: boolean;
}

export const FetchNextAdvertisements = ({
    className,
    onClick,
    hasMore,
    disabled,
}: FetchNextAdvertisementsProps) => {
    if (hasMore) {
        return (
            <Button
                disabled={disabled}
                className={classNames(cls.button, {}, [className])}
                onClick={onClick}
            >
                Загрузить еще
            </Button>
        );
    }
    return null;
};
