import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    text?: string
}

export const Icon = (props: IconProps) => {
    const {
        className,
        Svg,
        text,
    } = props;

    return (
        <>
            <Svg className={classNames(cls.Icon, {}, [className])} />
            {!!text && (` ${text}`)}
        </>
    );
};
