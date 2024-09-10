import { Select } from 'shared/ui/Select/Select';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { getOrderStatusString, SORT_BUTTONS_STATUS } from 'entities/Order';
import { RESET_STATUS } from 'shared/const/common';

import { ORDER_OPTIONS, SORT_FIELD_OPTIONS } from '../../lib/config';
import cls from './SortOrdersPanel.module.scss';

type SortOrdersPanelProps = {
    className?: string;
    sort: string;
    order: string;
    onChangeOrder: (newOrder: string) => void;
    onChangeSort: (newSort: string) => void;
    onClickStatus: (newStatus: number) => void;
}

export const SortOrdersPanel = ({
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
    onClickStatus,
}: SortOrdersPanelProps) => (
    <div className={classNames(cls.list, {}, [className])}>
        <Button
            onClick={() => onClickStatus(RESET_STATUS)}
        >
            Сбросить статус
        </Button>
        {SORT_BUTTONS_STATUS.map((status) => (
            <Button
                onClick={() => onClickStatus(status)}
                key={status}
            >
                {getOrderStatusString(status)}
            </Button>
        ))}
        <Select
            options={SORT_FIELD_OPTIONS}
            label="Сортировать по:"
            onChange={onChangeSort}
            value={sort}
        />
        <Select
            options={ORDER_OPTIONS}
            label="по:"
            onChange={onChangeOrder}
            value={order}
            readonly={!sort.length}
        />
    </div>
);
