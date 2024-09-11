import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getAdvertisementPageNum } from 'pages/AdvertisementsPage/model/selectors/advertisementsPage';
import cls from './PaginationAdvertisements.module.scss';

type PaginationAdvertisementProps = {
    totalData?: number;
    amount: number;
    onClick: (page: number) => void;
}

export const PaginationAdvertisements = ({
    totalData,
    amount,
    onClick,
}:PaginationAdvertisementProps) => {
    const page = useSelector(getAdvertisementPageNum);

    const pageNumbers = useMemo(() => {
        if (!totalData) return [];

        const totalPages = Math.ceil(totalData / amount);

        return Array.from({ length: totalPages }, (_, index) => index + 1);
    }, [totalData, amount]);

    if (pageNumbers.length <= 1) return null;

    return (
        <ul className={cls.list}>
            {pageNumbers.map((num) => (
                <li className={cls.list__item} key={num}>
                    <Button
                        theme={page === num ? ButtonTheme.SECONDARY : ButtonTheme.PRIMARY}
                        onClick={() => {
                            console.log(page, num);
                            onClick(num);
                        }}
                    >{num}
                    </Button>
                </li>
            ))}
        </ul>
    );
};
