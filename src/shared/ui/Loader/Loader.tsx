import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string,
}

export const Loader: FC<LoaderProps> = (LoaderProps) => {
    const { className } = LoaderProps;
    return (
        <div className={classNames(cls.loader, {}, [className])}>
            <div className={classNames(cls.loader__container, {}, [className])}>
                <div className={classNames(cls.loader__ellipsis)} />
                <div className={classNames(cls.loader__ellipsis)} />
                <div className={classNames(cls.loader__ellipsis)} />
                <div className={classNames(cls.loader__ellipsis)} />
            </div>
        </div>
    );
};
