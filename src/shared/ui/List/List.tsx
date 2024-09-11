/* eslint-disable */
import { classNames } from 'shared/lib/classNames/classNames';
import {ReactNode, ComponentType} from 'react';
import cls from './List.module.scss';

type ListProps<T> = {
    className?: string;
    itemsToRender: Array<T>;
    renderFunction: (item: T) => ReactNode;
    isLoading: boolean;
    Skeleton: ComponentType;
}

export const List = <T, >({
    className,
    itemsToRender,
    renderFunction,
    isLoading,
    Skeleton
}: ListProps<T>) => {
    return (
        <ul
            className={classNames(cls.list, {}, [className])}
        >
            {!!itemsToRender.length && itemsToRender.map(renderFunction)}
            {isLoading && (
                <>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </>
            )}
            {
                !itemsToRender.length && !isLoading && (<h2 className={cls.list__not}>Данных не найдено</h2>)
            }
        </ul>
    );
};
