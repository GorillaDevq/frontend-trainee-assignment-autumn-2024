import { Select } from 'shared/ui/Select/Select';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    AMOUNT_OPTIONS,
    ORDER_OPTIONS,
    SORT_FIELD_OPTIONS,
} from 'features/AdvertisementsSort/lib/config';
import cls from './AdvertisementSortSelectors.module.scss';

type AdvertisementSortSelectorsProps = {
    className?: string;
    sort: string;
    order: string;
    amount: number;
    onChangeOrder: (newOrder: string) => void;
    onChangeSort: (newSort: string) => void;
    onChangeAmount: (newAmount: string) => void;
}

export const AdvertisementSortSelectors = ({
    className,
    onChangeOrder,
    onChangeSort,
    onChangeAmount,
    order,
    sort,
    amount,
}: AdvertisementSortSelectorsProps) => {
    const changeSortHandler = (newSort: string) => {
        onChangeSort(newSort);
    };

    const changeOrderHandler = (newOrder: string) => {
        onChangeOrder(newOrder);
    };

    const changeLimitHandler = (newAmount: string) => {
        onChangeAmount(newAmount);
    };

    return (
        <div className={classNames(cls.list, {}, [className])}>
            <Select
                options={SORT_FIELD_OPTIONS}
                label="Сортировать по:"
                value={sort}
                onChange={changeSortHandler}
            />
            <Select
                options={ORDER_OPTIONS}
                label="по"
                value={order}
                onChange={changeOrderHandler}
                readonly={!sort.length}
            />
            <Select
                options={AMOUNT_OPTIONS}
                label="Количество"
                value={amount.toString()}
                onChange={changeLimitHandler}
            />
        </div>
    );
};
