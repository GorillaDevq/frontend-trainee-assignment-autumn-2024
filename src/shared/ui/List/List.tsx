/* eslint-disable */
import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './List.module.scss';

type ListProps<T> = {
    className?: string;
    itemsToRender: Array<T>;
    renderFunction: (item: T) => ReactNode;
}

export const List = <T, >({
    className,
    itemsToRender,
    renderFunction,
}: ListProps<T>) => {
    return (
        <ul
            className={classNames(cls.list, {}, [className])}
        >
            {!!itemsToRender.length && itemsToRender.map(renderFunction)}
        </ul>
    );
};
