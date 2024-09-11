import { Button } from 'shared/ui/Button/Button';

import cls from './PagePagination.module.scss';

type PaginationAdvertisementProps = {
    totalData: number;
    amount: number;
    page: number;
    onClick: (page: number) => void;
}

export const PagePagination = ({
    totalData, amount, page, onClick,
}: PaginationAdvertisementProps) => {
    const totalPages = Math.ceil(totalData / amount);

    const handleClick = (page: number) => {
        if (page > 0 && page <= totalPages) {
            onClick(page);
        }
    };

    if (totalPages <= 1) {
        return (<div className={cls.list} />);
    }

    const renderPageButtons = () => {
        const buttons = [];

        if (page !== 1) {
            buttons.push(
                <Button key={1} onClick={() => handleClick(1)}>
                    1
                </Button>,
            );
        }

        if (page > 2) {
            buttons.push(
                <Button key={page - 1} onClick={() => handleClick(page - 1)}>
                    {page - 1}
                </Button>,
            );
        }

        buttons.push(
            <Button key={page} disabled>
                {page}
            </Button>,
        );

        if (page < totalPages - 1) {
            buttons.push(
                <Button key={page + 1} onClick={() => handleClick(page + 1)}>
                    {page + 1}
                </Button>,
            );
        }

        if (page !== totalPages) {
            buttons.push(
                <Button key={totalPages} onClick={() => handleClick(totalPages)}>
                    {totalPages}
                </Button>,
            );
        }

        return buttons;
    };

    return (
        <div className={cls.list}>
            <Button onClick={() => handleClick(page - 1)} disabled={page === 1}>
                &lt;
            </Button>
            {renderPageButtons()}
            <Button onClick={() => handleClick(page + 1)} disabled={page === totalPages}>
                &gt;
            </Button>
        </div>
    );
};
