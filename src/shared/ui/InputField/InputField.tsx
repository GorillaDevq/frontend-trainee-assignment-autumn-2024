import { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './InputField.module.scss';

type InputFieldProps = {
    className?: string;
    label: string;
    name: string;
    register: UseFormRegister<any>; // TODO избавиться от any
    error?: FieldError;
    validationOptions?: RegisterOptions;
    placeholder?: string;
    type?: string;
}

export const InputField = ({
    className,
    label,
    name,
    register,
    error,
    placeholder,
    type = 'text',
    validationOptions,
}: InputFieldProps) => (
    <div className={classNames(cls.field, {}, [className])}>
        <label
            className={cls.field__label}
            htmlFor={name}
        >
            {label}:
        </label>
        <input
            id={name}
            className={cls.field__input}
            placeholder={placeholder}
            type={type}
            {...register(name, validationOptions)}
        />
        {error && <span className={cls.field__error}>{error.message}</span>}
    </div>
);
