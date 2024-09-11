import { useMemo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './PagePagination.module.scss';

type PaginationAdvertisementProps = {
    totalData?: number;
    amount: number;
    page: number;
    onClick: (page: number) => void;
}

export const PagePagination = ({
    totalData,
    amount,
    page,
    onClick,
}:PaginationAdvertisementProps) => {
    const pageNumbers = useMemo(() => {
        if (!totalData) return [];

        const totalPages = Math.ceil(totalData / amount);

        return Array.from({ length: totalPages }, (_, index) => index + 1);
    }, [totalData, amount]);

    if (pageNumbers.length <= 1) {
        return (
            <ul className={cls.list} />
        );
    }

    return (
        <ul className={cls.list}>
            {pageNumbers.map((num) => (
                <li className={cls.list__item} key={num}>
                    <Button
                        disabled={page === num}
                        theme={page === num ? ButtonTheme.SECONDARY : ButtonTheme.PRIMARY}
                        onClick={() => onClick(num)}
                    >
                        {num}
                    </Button>
                </li>
            ))}
        </ul>
    );
};
