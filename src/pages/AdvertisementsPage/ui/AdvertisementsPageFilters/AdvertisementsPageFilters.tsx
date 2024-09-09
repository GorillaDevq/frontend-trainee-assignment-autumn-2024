import { classNames } from 'shared/lib/classNames/classNames';
import { SearchAdvertisements } from 'features/SearchAdvertisements';
import { Button } from 'shared/ui/Button/Button';
import { AdvertisementSortSelectors } from 'features/AdvertisementsSort';
import {
    getAdvertisementPageOrder,
    getAdvertisementPageSort,
} from 'pages/AdvertisementsPage/model/selectors/advertisementsPage';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { advertisementsPageActions } from 'pages/AdvertisementsPage';
import {
    fetchAdvertisementsList,
} from 'pages/AdvertisementsPage/model/services/fetchAdvertisementsList/fetchAdvertisementsList';
import cls from './AdvertisementsPageFilters.module.scss';

type AdvertisementsPageFiltersProps = {
    onOpen: () => void;
}

export const AdvertisementsPageFilters = ({
    onOpen,
}:AdvertisementsPageFiltersProps) => {
    const dispatch = useAppDispatch();
    const sort = useSelector(getAdvertisementPageSort);
    const order = useSelector(getAdvertisementPageOrder);

    const onChangeSort = (newSort: string) => {
        dispatch(advertisementsPageActions.setSort(newSort));
        dispatch(advertisementsPageActions.setPage(1));
        dispatch(fetchAdvertisementsList({ replace: true }));
    };

    const onChangeOrder = (newOrder: string) => {
        dispatch(advertisementsPageActions.setOrder(newOrder));
        dispatch(advertisementsPageActions.setPage(1));
        dispatch(fetchAdvertisementsList({ replace: true }));
    };

    return (
        <div className={classNames(cls.filters)}>
            <AdvertisementSortSelectors
                sort={sort}
                order={order}
                onChangeOrder={onChangeOrder}
                onChangeSort={onChangeSort}
            />
            <SearchAdvertisements className={classNames(cls.filters__input)} />
            <Button onClick={onOpen}>
                Создать объявление
            </Button>
        </div>
    );
};
