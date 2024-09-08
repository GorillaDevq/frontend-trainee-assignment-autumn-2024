// import { classNames } from 'shared/lib/classNames/classNames';
// import {
//     ChangeEvent,
//     InputHTMLAttributes,
//     memo,
// } from 'react';
// import cls from './Input.module.scss';
//
// export enum InputTheme {
//     PRIMARY = 'primary',
// }
//
// type HTMLInputProps = InputHTMLAttributes<HTMLInputElement>
//
// type InputProps = {
//     className?: string;
//     theme?: InputTheme;
//     value?: string | number;
// } & HTMLInputProps
//
// export const Input = ({
//     className,
//     theme = InputTheme.PRIMARY,
//     value,
//     type = 'text',
//     onChange,
//     ...otherProps
// }: InputProps) =>
// // const onHandlerChange = (evt: ChangeEvent<HTMLInputElement>) => {
// //     onChange?.(evt.target.value);
// // };
//
//     (
//         <input
//             type={type}
//             className={classNames(cls.Input, {}, [className, cls[theme]])}
//             value={value}
//             // onChange={onHandlerChange}
//             {...otherProps}
//         />
//     );
