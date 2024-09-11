import { classNames } from 'shared/lib/classNames/classNames';
import { SearchAdvertisements } from 'features/SearchAdvertisements';
import { Button } from 'shared/ui/Button/Button';
import { AdvertisementSortSelectors } from 'features/AdvertisementsSort';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { advertisementsPageActions } from 'pages/AdvertisementsPage';
import { useDebounce } from 'shared/hooks/useDebounce';
import {
    getAdvertisementPageAmountToRender,
    getAdvertisementPageOrder,
    getAdvertisementPageSort,
} from '../../model/selectors/advertisementsPage';
import cls from './AdvertisementsPageFilters.module.scss';

type AdvertisementsPageFiltersProps = {
    onOpen: () => void;
    fetchData: (replace?: boolean) => Promise<void>;
}

export const AdvertisementsPageFilters = ({
    onOpen,
    fetchData,
}:AdvertisementsPageFiltersProps) => {
    const dispatch = useAppDispatch();
    const sort = useSelector(getAdvertisementPageSort);
    const order = useSelector(getAdvertisementPageOrder);
    const amount = useSelector(getAdvertisementPageAmountToRender);

    const fetchAdvertisementsData = () => {
        fetchData(true);
    };

    const debouncedFetchData = useDebounce(fetchAdvertisementsData, 500);

    const onChangeSort = (newSort: string) => {
        dispatch(advertisementsPageActions.setSort(newSort));
        debouncedFetchData();
    };

    const onChangeOrder = (newOrder: string) => {
        dispatch(advertisementsPageActions.setOrder(newOrder));
        debouncedFetchData();
    };

    const onChangeLimit = (newAmount: string) => {
        dispatch(advertisementsPageActions.setAmountToRender(Number(newAmount)));
    };

    const onChangeSearch = (newSearch: string) => {
        dispatch(advertisementsPageActions.setSearch(newSearch));
    };

    const onClickSearch = async () => {
        debouncedFetchData();
    };

    return (
        <div className={classNames(cls.filters)}>
            <AdvertisementSortSelectors
                sort={sort}
                order={order}
                amount={amount}
                onChangeOrder={onChangeOrder}
                onChangeSort={onChangeSort}
                onChangeAmount={onChangeLimit}
            />
            <SearchAdvertisements
                onChangeSearch={onChangeSearch}
                onClickSearch={onClickSearch}
                className={classNames(cls.filters__input)}
            />
            <Button onClick={onOpen}>
                Создать объявление
            </Button>
        </div>
    );
};
