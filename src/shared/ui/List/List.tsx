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
    error?: string;
}

export const List = <T, >({
    className,
    itemsToRender,
    renderFunction,
    isLoading,
    Skeleton,
    error,
}: ListProps<T>) => {

    if (error) {
        return (
            <h2 className={cls.error}>{error}</h2>
        )
    }

    return (
        <ul
            className={classNames(cls.list, {}, [className])}
        >
            {!!itemsToRender.length && itemsToRender.map(renderFunction)}
            {isLoading && (
                <>
                    <li><Skeleton /></li>
                    <li><Skeleton /></li>
                    <li><Skeleton /></li>
                    <li><Skeleton /></li>
                    <li><Skeleton /></li>
                    <li><Skeleton /></li>
                </>
            )}
            {
                !itemsToRender.length && !isLoading && (
                    <li className={cls.list__not}>
                        <h2>Данных не найдено</h2>
                    </li>
                )
            }
        </ul>
    );
};
