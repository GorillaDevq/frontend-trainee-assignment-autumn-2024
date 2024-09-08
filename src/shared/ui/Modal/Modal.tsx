import React, {
    useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { PropsWithChildren } from 'shared/types/common';
import cls from './Modal.module.scss';

type ModalProps = {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
} & PropsWithChildren

export const Modal = ({
    className,
    isOpen,
    onClose,
    children,
}: ModalProps) => {
    const mods: Record<string, boolean> = {
        [cls.modal_opened]: isOpen,
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.modal__overlay} onClick={onClose}>
                    <div className={cls.modal__container} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
