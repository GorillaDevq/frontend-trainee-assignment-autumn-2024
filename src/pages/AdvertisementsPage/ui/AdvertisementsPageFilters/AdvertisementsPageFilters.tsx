import { classNames } from 'shared/lib/classNames/classNames';
import { SearchAdvertisements } from 'features/SearchAdvertisements';
import { Button } from 'shared/ui/Button/Button';
import cls from './AdvertisementsPageFilters.module.scss';

type AdvertisementsPageFiltersProps = {
    onOpen: () => void;
}

export const AdvertisementsPageFilters = ({
    onOpen,
}:AdvertisementsPageFiltersProps) => {
    let a;
    return (
        <div className={classNames(cls.filters)}>
            <SearchAdvertisements className={classNames(cls.filters__input)} />
            <Button onClick={onOpen}>
                Создать объявление
            </Button>
        </div>
    );
};
