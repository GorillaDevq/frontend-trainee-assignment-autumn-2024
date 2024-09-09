import { Select } from 'shared/ui/Select/Select';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    ORDER_OPTIONS,
    SORT_FIELD_OPTIONS,
} from 'features/AdvertisementsSort/lib/config';
import cls from './AdvertisementSortSelectors.module.scss';

type AdvertisementSortSelectorsProps = {
    className?: string;
    sort: string;
    order: string;
    onChangeOrder: (newOrder: string) => void;
    onChangeSort: (newSort: string) => void;
}

export const AdvertisementSortSelectors = ({
    className,
    onChangeOrder,
    onChangeSort,
    order,
    sort,
}: AdvertisementSortSelectorsProps) => {
    const changeSortHandler = (newSort: string) => {
        onChangeSort(newSort);
    };

    const changeOrderHandler = (newOrder: string) => {
        onChangeOrder(newOrder);
    };

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                options={SORT_FIELD_OPTIONS}
                label="Сортировать ПО"
                value={sort}
                onChange={changeSortHandler}
            />
            <Select
                options={ORDER_OPTIONS}
                label="по"
                value={order}
                onChange={changeOrderHandler}
                className={cls.order}
                readonly={!sort.length}
            />
            <Select
                options={ORDER_OPTIONS}
                label="по"
                value={order}
                onChange={changeOrderHandler}
                className={cls.order}
                readonly={!sort.length}
            />
        </div>
    );
};
