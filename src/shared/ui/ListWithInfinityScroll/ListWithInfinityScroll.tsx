import { classNames } from 'shared/lib/classNames/classNames';
import { MutableRefObject, ReactNode, useRef } from 'react';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll';
import cls from './ListWithInfinityScroll.module.scss';

type ListWithInfinityScrollProps<T> = {
    className?: string;
    onScrollEnd?: () => void;
    itemsToRender: Array<T>;
    renderFunction: (item: T) => ReactNode;
}

export const ListWithInfinityScroll = <T, >({
    className,
    onScrollEnd,
    itemsToRender,
    renderFunction,
}: ListWithInfinityScrollProps<T>) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLUListElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLLIElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <ul
            ref={wrapperRef}
            className={classNames(cls.list, {}, [className])}
        >
            {!!itemsToRender.length && itemsToRender.map(renderFunction)}
            <li
                className={cls.list__trigger}
                ref={triggerRef}
            />
        </ul>
    );
};
