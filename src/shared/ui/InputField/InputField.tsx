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
        <label htmlFor={name}>{label}</label>
        <input
            {...register(name, validationOptions)}
            placeholder={placeholder}
            type={type}
        />
        {error && <span>{error.message}</span>}
    </div>
);
