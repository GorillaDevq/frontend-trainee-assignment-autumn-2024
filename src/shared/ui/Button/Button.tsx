import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    PRIMARY = 'button_primary',
    SECONDARY = 'button_secondary',
    RED = 'button_red',
}

type ButtonProps = {
    className?: string,
    theme?: ButtonTheme,
    disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (ButtonProps: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.PRIMARY,
        ...otherProps
    } = ButtonProps;

    return (
        <button
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
