import { Select } from 'shared/ui/Select/Select';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getOrderStatusString, SORT_BUTTONS_STATUS } from 'entities/Order';
import { RESET_STATUS } from 'shared/const/common';

import { ORDER_OPTIONS, SORT_FIELD_OPTIONS } from '../../lib/config';
import cls from './SortOrdersPanel.module.scss';

type SortOrdersPanelProps = {
    className?: string;
    sort: string;
    order: string;
    status: number;
    onChangeOrder: (newOrder: string) => void;
    onChangeSort: (newSort: string) => void;
    onClickStatus: (newStatus: number) => void;
}

export const SortOrdersPanel = ({
    className,
    sort,
    order,
    status,
    onChangeOrder,
    onChangeSort,
    onClickStatus,
}: SortOrdersPanelProps) => (
    <div className={classNames(cls.list, {}, [className])}>
        <Button
            theme={ButtonTheme.PRIMARY}
            disabled={status === -1}
            onClick={() => onClickStatus(RESET_STATUS)}
        >
            Сбросить статус
        </Button>
        <div className={cls.buttons}>
            {SORT_BUTTONS_STATUS.map((btnStatus) => (
                <Button
                    theme={ButtonTheme.PRIMARY}
                    disabled={status === btnStatus}
                    onClick={() => onClickStatus(btnStatus)}
                    key={btnStatus}
                >
                    {getOrderStatusString(btnStatus)}
                </Button>
            ))}
        </div>
        <div className={cls.container}>
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
    </div>
);
