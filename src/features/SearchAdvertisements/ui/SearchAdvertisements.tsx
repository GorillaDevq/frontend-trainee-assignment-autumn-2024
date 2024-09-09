import { Input } from 'shared/ui/Input/Input';
import { classNames } from 'shared/lib/classNames/classNames';
import SearchIcon from 'shared/assets/icons/search.svg';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import cls from './SearchAdvertisements.module.scss';

type SearchAdvertisementsProps = {
    className?: string;
    onChangeSearch: (newSearch: string) => void;
    onClickSearch: () => void;
}

export const SearchAdvertisements = ({
    className,
    onClickSearch,
    onChangeSearch,
}: SearchAdvertisementsProps) => {
    const dispatch = useAppDispatch();

    return (
        <label className={classNames(cls.search, {}, [className])}>
            <Input
                onChange={onChangeSearch}
                className={cls.search__input}
                placeholder="Введите полное название товара"
            />
            <Button className={cls.search__submit} onClick={onClickSearch}>
                Найти
                <SearchIcon className={cls.search__icon} />
            </Button>
        </label>
    );
};
