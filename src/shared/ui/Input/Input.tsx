import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent,
    InputHTMLAttributes,
} from 'react';
import cls from './Input.module.scss';

export enum InputTheme {
    PRIMARY = 'input_primary',
    OUTLINE = 'input_outline'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' >

interface InputProps extends HTMLInputProps {
    className?: string;
    theme?: InputTheme;
    value?: string | number;
    onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
    const {
        className,
        theme = InputTheme.PRIMARY,
        value,
        type = 'text',
        onChange,
        ...otherProps
    } = props;

    const onHandlerChange = (evt: ChangeEvent<HTMLInputElement>) => {
        onChange?.(evt.target.value);
    };

    return (
        <input
            type={type}
            className={classNames(cls.input, {}, [className, cls[theme]])}
            value={value}
            onChange={onHandlerChange}
            {...otherProps}
        />
    );
};
